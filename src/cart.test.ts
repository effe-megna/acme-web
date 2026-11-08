import { describe, expect, it } from 'vitest'
import { cartTotal } from './cart'

describe('cart', () => {
  it('computes the total', () => {
    expect(cartTotal([{ name: 'tea', price: 300, quantity: 2 }])).toBe(600)
  })
})
