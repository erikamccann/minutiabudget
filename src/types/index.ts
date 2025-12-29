export type TransactionType = "EXPENSE" | "INCOME" | "PAYMENT" | "TRANSFER";

export interface Category {
  id: string;
  name: string;
  allowCarryover: boolean;
}

export interface WeeklyBudgetItem {
  id: string;
  categoryId: string;
  planned: number;
  spent: number;
  transfersIn: number;
  transfersOut: number;
}

export interface WeeklyBudget {
  id: string;
  weekStart: string;
  weekEnd: string;
  items: WeeklyBudgetItem[];
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  categoryId?: string;
  transactionType: TransactionType;
  accountId: string;
  targetAccountId?: string;
  loanId?: string;
  eventId?: string;
  notes?: string;
}

export interface Account {
  id: string;
  name: string;
  type: "CASH" | "CREDIT" | "SAVINGS";
  balance: number;
}

export interface Asset {
  id: string;
  name: string;
  type: "HOUSE" | "CAR" | "SAVINGS" | "INVESTMENT" | "OTHER";
  purchasePrice: number;
  currentValue: number;
  notes?: string;
  linkedLoanId?: string;
}

export interface Loan {
  id: string;
  loanType: string;
  principalAmount: number;
  interestRate: number;
  rateType: "Fixed" | "Variable";
  amortizationYears: number;
  termYears: number;
  paymentFrequency: "Monthly" | "Biweekly" | "Weekly";
  linkedAssetId?: string;
}

export interface LoanPayment {
  id: string;
  loanId: string;
  amount: number;
  date: string;
  interestPortion: number;
  principalPortion: number;
}

export interface EventGoal {
  id: string;
  name: string;
  type: "Goal" | "Event";
  targetAmount: number;
  targetDate: string;
  status: "PLANNED" | "ACTIVE" | "COMPLETE";
  allocated: number;
}

export interface Allocation {
  id: string;
  eventId: string;
  amount: number;
  source: "EXCESS" | "MANUAL";
  date: string;
}

export interface RecurringRule {
  id: string;
  label: string;
  amount: number;
  cadence: "Weekly" | "Monthly" | "Quarterly";
  categoryId?: string;
  eventId?: string;
  accountId?: string;
}

export interface CashForecastInput {
  obligations: { label: string; date: string; amount: number }[];
  expectedIncome: { label: string; date: string; amount: number }[];
  allocations: { label: string; date: string; amount: number }[];
  currentCash: number;
  includePlannedSpend?: boolean;
}

export interface CashForecastResult {
  requiredCash: number;
  projectedCash: number;
  excess: number;
}
