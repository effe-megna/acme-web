import { describe, expect, it } from 'vitest'
import { refundedTotal } from './refund'

describe('refund', () => {
  it('sums refund amounts', () => {
    expect(refundedTotal([{ amount: 200 }, { amount: 150 }])).toBe(350)
  })
})
