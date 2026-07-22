import {
  ShoppingCart,
  X,
} from "lucide-react"
import { CartFooter } from "./cart-footer"
import { CartItemCard } from "./cart-item-card"

export function CartPanel({
  items,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
  onViewCart,
  onCheckout,
}) {
  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0,
  )

  return (
    <section
      dir="rtl"
      className="
        flex min-w-0 flex-1 flex-col
        bg-white
      "
    >
      <header
        className="
          flex h-10 items-center justify-between
          border-b border-[#efefef] px-4
        "
      >
        <h1 className="text-[12px] font-bold text-[#333]">
          سلة التسوق ({totalQuantity})
        </h1>

        <button
          type="button"
          aria-label="إغلاق السلة"
          onClick={onClose}
          className="
            flex h-7 w-7 items-center justify-center
            text-[#333]
          "
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {items.length > 0 ? (
          <div className="space-y-6">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={() => onRemove(item.id)}
                onIncrease={() => onIncrease(item.id)}
                onDecrease={() => onDecrease(item.id)}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              flex h-full flex-col items-center
              justify-center text-center
            "
          >
            <ShoppingCart className="h-10 w-10 text-[#c4c4c4]" />

            <h2 className="mt-3 text-sm font-bold text-[#444]">
              سلة التسوق فارغة
            </h2>

            <p className="mt-1 text-xs text-[#999]">
              لم تقم بإضافة أي منتجات حتى الآن
            </p>
          </div>
        )}
      </div>

      <CartFooter
        total={totalPrice}
        onViewCart={onViewCart}
        onCheckout={onCheckout}
      />
    </section>
  )
}