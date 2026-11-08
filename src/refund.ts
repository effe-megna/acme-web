export type Refund = { amount: number }

export function refundedTotal(refunds: Refund[]): number {
  return refunds.reduce((total, refund) => total + refund.amount, 0)
}
