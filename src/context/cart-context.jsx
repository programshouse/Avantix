import { createContext, useContext, useMemo, useState } from "react"
import { products } from "@/data/products"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { ...products[0], qty: 1 },
    { ...products[1], qty: 1 },
    { ...products[2], qty: 1 },
  ])

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p)),
    )
  }

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))

  const value = useMemo(() => {
    const count = items.reduce((s, p) => s + p.qty, 0)
    const subtotal = items.reduce((s, p) => s + p.price * p.qty, 0)
    return { items, addItem, updateQty, removeItem, count, subtotal }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
