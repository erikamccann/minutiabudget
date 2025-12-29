import { addDays, differenceInDays, parseISO } from "date-fns";
import {
  Allocation,
  CashForecastInput,
  CashForecastResult,
  Loan,
  LoanPayment,
  Transaction,
  WeeklyBudget,
  WeeklyBudgetItem,
} from "@/types";

export function calculateWeeklyAvailability(item: WeeklyBudgetItem): number {
  return item.planned - item.spent + item.transfersIn - item.transfersOut;
}

export function summarizeWeeklyBudget(budget: WeeklyBudget) {
  const totalPlanned = budget.items.reduce((sum, item) => sum + item.planned, 0);
  const totalSpent = budget.items.reduce((sum, item) => sum + item.spent, 0);
  const totalAvailable = budget.items.reduce((sum, item) => sum + calculateWeeklyAvailability(item), 0);
  return { totalPlanned, totalSpent, totalAvailable };
}

export function buildTransferAuditTrail(items: WeeklyBudgetItem[]) {
  return items.map((item) => ({
    itemId: item.id,
    netTransfer: item.transfersIn - item.transfersOut,
  }));
}

export function computePaymentBreakdown(transactions: Transaction[]) {
  const accruals: Record<string, number> = {};
  const payments: Record<string, number> = {};
  transactions.forEach((txn) => {
    const key = txn.loanId || txn.accountId;
    if (!key) return;

    if (txn.transactionType === "EXPENSE" || txn.transactionType === "INCOME") {
      accruals[key] = (accruals[key] || 0) + txn.amount;
    }

    if (txn.transactionType === "PAYMENT") {
      payments[key] = (payments[key] || 0) + txn.amount;
    }
  });

  return { accruals, payments };
}

export function computeSafeAllocationSpace(
  cashOnHand: number,
  minimumBuffer: number,
  plannedOutflows: number,
): number {
  const buffer = Math.max(minimumBuffer, 0);
  const safeSpace = cashOnHand - buffer - plannedOutflows;
  return safeSpace < 0 ? 0 : safeSpace;
}

export function projectCashRequirements(input: CashForecastInput): CashForecastResult {
  const requiredCash =
    input.obligations.reduce((sum, item) => sum + item.amount, 0) +
    (input.includePlannedSpend ? input.allocations.reduce((sum, a) => sum + a.amount, 0) : 0);

  const projectedIncome = input.expectedIncome.reduce((sum, item) => sum + item.amount, 0);
  const projectedCash = input.currentCash + projectedIncome - requiredCash;
  const excess = projectedCash > 0 ? projectedCash : 0;

  return { requiredCash, projectedCash, excess };
}

export function buildAllocationPlan(
  allocations: Allocation[],
  minimumCash: number,
  currentCash: number,
): { approved: Allocation[]; rejected: Allocation[]; remainingCash: number } {
  const approved: Allocation[] = [];
  const rejected: Allocation[] = [];
  let availableCash = currentCash - minimumCash;

  allocations.forEach((allocation) => {
    if (availableCash - allocation.amount >= 0) {
      approved.push(allocation);
      availableCash -= allocation.amount;
    } else {
      rejected.push(allocation);
    }
  });

  return { approved, rejected, remainingCash: Math.max(availableCash, 0) + minimumCash };
}

export function computeLoanPayment(loan: Loan) {
  const monthlyRate = loan.interestRate / 100 / 12;
  const totalPayments = loan.amortizationYears * 12;
  const numerator = loan.principalAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
  const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;
  const monthlyPayment = denominator === 0 ? 0 : numerator / denominator;
  return { monthlyPayment: Number(monthlyPayment.toFixed(2)) };
}

export function buildAmortizationSchedule(
  loan: Loan,
  months: number,
): LoanPayment[] {
  const { monthlyPayment } = computeLoanPayment(loan);
  const schedule: LoanPayment[] = [];
  let remainingBalance = loan.principalAmount;
  const startDate = new Date();

  for (let i = 0; i < months; i += 1) {
    const interestPortion = Number((remainingBalance * (loan.interestRate / 100 / 12)).toFixed(2));
    const principalPortion = Number((monthlyPayment - interestPortion).toFixed(2));
    remainingBalance = Number((remainingBalance - principalPortion).toFixed(2));
    const date = addDays(startDate, 30 * i);

    schedule.push({
      id: `${loan.id}-${i + 1}`,
      loanId: loan.id,
      amount: monthlyPayment,
      date: date.toISOString(),
      interestPortion,
      principalPortion,
    });

    if (remainingBalance <= 0) break;
  }

  return schedule;
}

export function calculateRunningBalance(transactions: Transaction[], openingBalance: number) {
  return transactions
    .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
    .reduce<{ running: number; ledger: { id: string; balance: number }[] }>((state, txn) => {
      const sign = txn.transactionType === "INCOME" ? 1 : -1;
      const nextBalance = Number((state.running + sign * txn.amount).toFixed(2));
      return {
        running: nextBalance,
        ledger: [...state.ledger, { id: txn.id, balance: nextBalance }],
      };
    }, { running: openingBalance, ledger: [] });
}

export function creditCardAccruals(transactions: Transaction[], cutoffDate: string) {
  const cutoff = parseISO(cutoffDate);
  let accrued = 0;
  let payments = 0;
  transactions.forEach((txn) => {
    const date = parseISO(txn.date);
    if (differenceInDays(date, cutoff) > 0) return;
    if (txn.transactionType === "EXPENSE") accrued += txn.amount;
    if (txn.transactionType === "PAYMENT") payments += txn.amount;
  });
  return { accrued: Number(accrued.toFixed(2)), paid: Number(payments.toFixed(2)), net: Number((accrued - payments).toFixed(2)) };
}
