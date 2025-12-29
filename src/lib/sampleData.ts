import { addDays, startOfWeek } from "date-fns";
import { Allocation, Asset, EventGoal, Loan, Transaction, WeeklyBudget } from "@/types";

const start = startOfWeek(new Date(), { weekStartsOn: 1 });
const end = addDays(start, 6);

export const categories = [
  { id: "groceries", name: "Groceries", allowCarryover: true },
  { id: "fuel", name: "Fuel", allowCarryover: false },
  { id: "fun", name: "Fun", allowCarryover: true },
  { id: "debt", name: "Debt Payments", allowCarryover: false },
];

export const weeklyBudget: WeeklyBudget = {
  id: "week-1",
  weekStart: start.toISOString(),
  weekEnd: end.toISOString(),
  items: [
    { id: "b1", categoryId: "groceries", planned: 180, spent: 64, transfersIn: 0, transfersOut: 20 },
    { id: "b2", categoryId: "fuel", planned: 90, spent: 20, transfersIn: 15, transfersOut: 0 },
    { id: "b3", categoryId: "fun", planned: 60, spent: 30, transfersIn: 5, transfersOut: 0 },
    { id: "b4", categoryId: "debt", planned: 200, spent: 0, transfersIn: 0, transfersOut: 0 },
  ],
};

export const transactions: Transaction[] = [
  {
    id: "t1",
    amount: 64,
    date: start.toISOString(),
    categoryId: "groceries",
    transactionType: "EXPENSE",
    accountId: "checking",
    notes: "Grocery run",
  },
  {
    id: "t2",
    amount: 500,
    date: addDays(start, 1).toISOString(),
    categoryId: "income",
    transactionType: "INCOME",
    accountId: "checking",
    notes: "Paycheck",
  },
  {
    id: "t3",
    amount: 120,
    date: addDays(start, 2).toISOString(),
    categoryId: "debt",
    transactionType: "PAYMENT",
    accountId: "checking",
    loanId: "loan-1",
    notes: "Auto loan payment",
  },
  {
    id: "t4",
    amount: 35,
    date: addDays(start, 3).toISOString(),
    categoryId: "fun",
    transactionType: "EXPENSE",
    accountId: "credit-1",
    notes: "Movie night",
  },
];

export const assets: Asset[] = [
  {
    id: "asset-1",
    name: "Home",
    type: "HOUSE",
    purchasePrice: 350000,
    currentValue: 420000,
    notes: "Primary residence",
    linkedLoanId: "loan-1",
  },
  {
    id: "asset-2",
    name: "Savings",
    type: "SAVINGS",
    purchasePrice: 20000,
    currentValue: 21000,
  },
];

export const loan: Loan = {
  id: "loan-1",
  loanType: "Mortgage",
  principalAmount: 250000,
  interestRate: 4.5,
  rateType: "Fixed",
  amortizationYears: 30,
  termYears: 5,
  paymentFrequency: "Monthly",
  linkedAssetId: "asset-1",
};

export const events: EventGoal[] = [
  {
    id: "event-1",
    name: "Summer Trip",
    type: "Event",
    targetAmount: 2500,
    targetDate: addDays(start, 90).toISOString(),
    status: "ACTIVE",
    allocated: 800,
  },
  {
    id: "goal-1",
    name: "Emergency Fund",
    type: "Goal",
    targetAmount: 10000,
    targetDate: addDays(start, 180).toISOString(),
    status: "ACTIVE",
    allocated: 3200,
  },
];

export const allocations: Allocation[] = [
  { id: "alloc-1", eventId: "event-1", amount: 150, source: "EXCESS", date: start.toISOString() },
  { id: "alloc-2", eventId: "goal-1", amount: 200, source: "MANUAL", date: addDays(start, 1).toISOString() },
];
