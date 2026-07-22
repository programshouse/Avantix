import { useEffect, useState } from "react"
import { CartPanel } from "@/components/cart/cart-panel"
import { RecommendedPanel } from "@/components/cart/recommended-panel"
import { recommendedProducts } from "@/data/cart-data"

export default function CartPage({
  open,
  onClose,
  items = [],
  onIncrease,
  onDecrease,
  onRemove,
  onAddToCart,
  onViewCart,
  onCheckout,
}) {
  const [showRecommended, setShowRecommended] =
    useState(true)

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = "hidden"

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        "keydown",
        handleEscape,
      )
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setShowRecommended(true)
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Dark background */}
      <button
        type="button"
        aria-label="إغلاق سلة التسوق"
        onClick={onClose}
        className="
          absolute inset-0
          h-full w-full
          cursor-default
          bg-black/50
        "
      />

      {/* Cart drawer */}
      <aside
        dir="rtl"
        role="dialog"
        aria-modal="true"
        aria-label="سلة التسوق"
 className="
  absolute right-0 top-0 z-10
  h-full w-full max-w-[670px]
  overflow-hidden bg-white
  shadow-[-8px_0_30px_rgba(0,0,0,0.18)]
"
      >
        <div
          className="
            flex h-full w-full
            overflow-hidden bg-white
          "
        >
          {showRecommended && (
            <RecommendedPanel
              products={recommendedProducts}
              onClose={() =>
                setShowRecommended(false)
              }
              onAddToCart={onAddToCart}
            />
          )}

          <CartPanel
            items={items}
            onClose={onClose}
            onRemove={onRemove}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onViewCart={onViewCart}
            onCheckout={onCheckout}
          />
        </div>
      </aside>
    </div>
  )
}