import { Trash2 } from "lucide-react"
import { CartBenefits } from "./cart-benefits"
import { QuantityControl } from "./quantity-control"

export function CartItemCard({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <article
      dir="rtl"
      className="
        relative flex min-h-[165px] w-full
        gap-4 rounded-[12px]
        border border-[#dddddd] bg-white
        px-3 py-3
      "
    >
      <div
        className="
          flex h-[108px] w-[74px] shrink-0
          items-center justify-center
          self-start overflow-hidden
        "
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="
            h-full w-full object-contain
            drop-shadow-[0_7px_7px_rgba(0,0,0,0.12)]
          "
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
                line-clamp-2 text-[12px]
                font-bold leading-5 text-[#171717]
              "
            >
              {item.name}
            </h3>

            <button
              type="button"
              className="
                mt-3 rounded-full bg-[#eaf2ff]
                px-3 py-1 text-[10px]
                font-medium text-primary
              "
            >
              {item.tag}
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <p className="text-[12px] font-bold text-[#191919]">
              {item.price} جنيهًا
            </p>

            <button
              type="button"
              aria-label="حذف المنتج"
              onClick={onRemove}
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full bg-[#f2f2f2]
                text-[#8a8a8a]
                transition-colors
                hover:bg-[#e8e8e8]
                hover:text-[#444]
              "
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-3 text-[10px] text-[#9a9a9a]">
          اطلب في غضون ساعتين و10 دقيقة
        </p>

        <div className="mt-2">
          <CartBenefits />
        </div>

        <div className="mt-auto flex justify-start pt-3">
          <QuantityControl
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </div>
      </div>
    </article>
  )
}