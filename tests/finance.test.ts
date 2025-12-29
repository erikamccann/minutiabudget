import { buildAllocationPlan, calculateWeeklyAvailability, computeLoanPayment, projectCashRequirements } from "@/lib/finance";
import { weeklyBudget, allocations, loan } from "@/lib/sampleData";

describe("finance helpers", () => {
  test("calculates weekly availability per category", () => {
    const groceries = weeklyBudget.items.find((i) => i.categoryId === "groceries")!;
    expect(calculateWeeklyAvailability(groceries)).toBeCloseTo(116);
  });

  test("blocks allocations that violate cash floor", () => {
    const plan = buildAllocationPlan(allocations, 500, 600);
    expect(plan.approved.length).toBe(1);
    expect(plan.rejected.length).toBe(1);
    expect(plan.remainingCash).toBeGreaterThanOrEqual(500);
  });

  test("projects required cash and excess", () => {
    const forecast = projectCashRequirements({
      obligations: [{ label: "Rent", date: new Date().toISOString(), amount: 1200 }],
      expectedIncome: [{ label: "Paycheck", date: new Date().toISOString(), amount: 2000 }],
      allocations: [],
      currentCash: 500,
      includePlannedSpend: false,
    });
    expect(forecast.requiredCash).toBe(1200);
    expect(forecast.projectedCash).toBe(1300);
    expect(forecast.excess).toBe(1300);
  });

  test("computes explainable loan payment", () => {
    const payment = computeLoanPayment(loan);
    expect(payment.monthlyPayment).toBeGreaterThan(0);
  });
});
