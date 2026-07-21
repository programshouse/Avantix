import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function ProductCard({ product, offer = false }) {
  const { addItem } = useCart()

  return (
    <article
      dir="rtl"
      className="
        group relative mx-auto mt-[70px]
        flex w-full max-w-[260px] flex-col
        rounded-t-[120px] rounded-b-[18px]
        border border-[#ececec] bg-white
        shadow-[0_10px_25px_rgba(0,0,0,0.07)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)]
        sm:max-w-[275px]
        lg:max-w-[290px]
      "
    >
      {/* Rounded background */}
      <div
        className="
          relative z-0 flex h-[180px]
          items-end justify-center
          overflow-hidden rounded-t-[120px]
          bg-[#e7effc]
          sm:h-[195px]
          lg:h-[210px]
        "
      >
        {offer && (
          <span
            className="
              absolute right-5 top-10 z-30
              rounded-full bg-[#e01f7a]
              px-3 py-1 text-[10px]
              font-medium text-white
            "
          >
            عرض خاص
          </span>
        )}
      </div>

      {/* Floating 3D product image */}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        loading="lazy"
        className="
          pointer-events-none absolute
          left-1/2 top-[-72px] z-20
          h-[200px] w-auto max-w-[90%]
          -translate-x-1/2 object-contain
          drop-shadow-[0_18px_14px_rgba(0,0,0,0.2)]
          transition-transform duration-300
          group-hover:-translate-x-1/2
          group-hover:-translate-y-2
          group-hover:scale-105
          sm:top-[-82px] sm:h-[270px]
          lg:top-[-42px] lg:h-[240px]
        "
      />

      {/* Card body */}
      <div
        className="
          relative z-10 flex flex-1 flex-col
          rounded-b-[18px] bg-white
          px-4 pb-4 pt-4
          sm:px-5
        "
      >
        {/* Tag and rating */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className="
              rounded-full bg-[#eaf2fe]
              px-3 py-1 text-[10px]
              font-medium text-primary
              sm:text-[11px]
            "
          >
            {product.tag || "غسول"}
          </span>

          <div
            dir="ltr"
            className="flex items-center gap-1 text-[11px] font-semibold text-[#333]"
          >
            <span>{product.rating || "4.8"}</span>

            <Star className="h-3.5 w-3.5 fill-[#f2b807] text-[#f2b807]" />
          </div>
        </div>

        {/* Product title */}
        <h3
          className="
            line-clamp-2 min-h-[42px]
            text-right text-[12px] font-medium
            leading-[20px] text-[#1f1f1f]
            sm:text-[13px]
          "
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-3 flex items-center justify-start gap-2">
          <span className="text-[12px] font-bold text-primary sm:text-[13px]">
            {product.price} جنيهًا
          </span>

          {product.oldPrice && (
            <span className="text-[10px] text-[#999] line-through sm:text-[11px]">
              {product.oldPrice}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          type="button"
          onClick={() => addItem(product)}
          className="
            mt-4 flex h-[38px] w-full
            items-center justify-center gap-2
            rounded-[12px] bg-primary
            text-[11px] font-medium text-white
            transition-colors duration-300
            hover:bg-[#094bb3]
            focus:outline-none
            focus:ring-2 focus:ring-[#0c5edd]/30
            focus:ring-offset-2
            sm:h-[40px] sm:text-[12px]
          "
        >
          <ShoppingCart className="h-4 w-4" />
          أضف إلى السلة
        </button>
      </div>
    </article>
  )
}