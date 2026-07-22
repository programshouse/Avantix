import {
  Minus,
  Plus,
  RotateCcw,
  Store,
  Trash2,
  Truck,
} from "lucide-react"
import { useCart } from "@/context/cart-context"

export function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()

  const quantity = item.qty ?? item.quantity ?? 1

  return (
    <article
      dir="rtl"
      className="
        relative flex min-h-[220px] w-full
        items-start gap-6
        rounded-[16px]
        border border-[#d8d8d8]
        bg-white px-6 py-5
        shadow-[0_3px_10px_rgba(0,0,0,0.04)]
      "
    >
      {/* Product image */}
      <div
        className="
          flex h-[150px] w-[110px]
          shrink-0 items-center justify-center
        "
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name || "صورة المنتج"}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = "/placeholder.svg"
          }}
          className="
            h-[145px] w-full
            object-contain
          "
        />
      </div>

      {/* Product information */}
      <div className="flex min-w-0 flex-1 flex-col self-stretch">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3
              className="
                line-clamp-2 max-w-[520px]
                text-[16px] font-bold
                leading-[26px] text-[#181818]
              "
            >
              {item.name}
            </h3>

            <span
              className="
                mt-3 inline-flex rounded-full
                bg-[#eaf2ff] px-4 py-1.5
                text-[12px] font-medium text-primary
              "
            >
              احصل عليها الآن
            </span>
          </div>

          <span
            className="
              shrink-0 whitespace-nowrap
              text-[15px] font-bold mx-10
              text-[#181818]
            "
          >
            {item.price} جنيهًا
          </span>
        </div>

        <p className="mt-4 text-[12px] text-[#999]">
          اطلب في غضون ساعتين و10 دقيقة
        </p>

        <div
          className="
            mt-3 flex flex-wrap items-center
            gap-x-5 gap-y-3
            text-[12px] text-[#a0a0a0]
          "
        >
          <span className="flex items-center gap-1.5">
            <Truck className="h-4 w-4" />
            توصيل مجاني
          </span>

          <span className="flex items-center gap-1.5">
            <RotateCcw className="h-4 w-4" />
            غير قابل للاستبدال ولا الإرجاع
          </span>

          <span className="flex items-center gap-1.5">
            <Store className="h-4 w-4" />
            يتم البيع من الشركة
          </span>
        </div>

        {/* Quantity */}
        <div className="mt-auto flex justify-start pt-5">
          <div
            dir="ltr"
            className="
              flex h-[36px] items-center
              overflow-hidden rounded-[10px]
              border border-[#d5deee]
              bg-[#f3f6fc]
            "
          >
            <button
              type="button"
              aria-label="تقليل الكمية"
              disabled={quantity <= 1}
              onClick={() => updateQty(item.id, -1)}
              className="
                flex h-full w-10 items-center justify-center
                text-[#768197]
                transition-colors
                hover:bg-[#e8edf7]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <Minus className="h-4 w-4" />
            </button>

            <span
              className="
                flex h-full min-w-10
                items-center justify-center
                text-[13px] font-semibold
                text-[#4b5563]
              "
            >
              {quantity}
            </span>

            <button
              type="button"
              aria-label="زيادة الكمية"
              onClick={() => updateQty(item.id, 1)}
              className="
                flex h-full w-10 items-center justify-center
                text-[#768197]
                transition-colors
                hover:bg-[#e8edf7]
              "
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete */}
      <button
        type="button"
        aria-label="حذف المنتج"
        onClick={() => removeItem(item.id)}
        className="
          absolute left-1 top-4
          flex h-9 w-9 items-center justify-center
          rounded-full bg-[#f2f2f2]
          text-[#888]
          transition-colors
          hover:bg-[#e7e7e7]
          hover:text-[#444]
        "
      >
        <Trash2 className="h-4.5 w-4.5" />
      </button>
    </article>
  )
}