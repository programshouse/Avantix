import { X } from "lucide-react"
import { RecommendedProductCard } from "./recommended-product-card"

export function RecommendedPanel({
  products,
  onClose,
  onAddToCart,
}) {
  return (
    <aside
      dir="rtl"
      className="
        flex h-full w-[185px] shrink-0
        flex-col border-l border-[#e2e2e2]
        bg-[#fafafa] px-2 py-2
        sm:w-[210px]
      "
    >
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-[12px] font-bold text-[#444]">
          قد يعجبك أيضًا
        </h2>

        <button
          type="button"
          aria-label="إغلاق المقترحات"
          onClick={onClose}
          className="
            flex h-7 w-7 items-center
            justify-center text-[#333]
          "
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div
        className="
          flex-1 space-y-3
          overflow-y-auto pb-3 pl-1
        "
      >
        {products.map((product) => (
          <RecommendedProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </aside>
  )
}