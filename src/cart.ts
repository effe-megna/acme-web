export type CartItem = { name: string; price: number; quantity: number }

export function cartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
