import { describe, expect, it } from 'vitest'
import { cartCount } from './cart'

describe('cart count', () => {
  it('counts quantities', () => {
    expect(cartCount([{ name: 'tea', price: 300, quantity: 2 }])).toBe(2)
  })
})
