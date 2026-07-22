import { useState } from "react"
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react"

export function RecommendedProductCard({
  product,
  onAddToCart,
}) {
  const [favorite, setFavorite] = useState(false)

  return (
    <article
      dir="rtl"
      className="
        relative flex min-h-[290px] flex-col
        rounded-[12px] border border-[#e0e0e0]
        bg-white p-2.5
      "
    >
      <button
        type="button"
        aria-label="إضافة إلى المفضلة"
        onClick={() =>
          setFavorite((previous) => !previous)
        }
        className="
          absolute left-2 top-2 z-10
          flex h-7 w-7 items-center justify-center
          text-[#8c8c8c]
        "
      >
        <Heart
          className={`
            h-4 w-4
            ${
              favorite
                ? "fill-primary text-primary"
                : ""
            }
          `}
        />
      </button>

      <div
        className="
          flex h-[155px] items-center
          justify-center overflow-hidden
        "
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="
            h-[145px] w-auto object-contain
            drop-shadow-[0_8px_8px_rgba(0,0,0,0.14)]
          "
        />
      </div>

      <div className="mt-1 flex items-center justify-between">
        <span
          className="
            rounded-full bg-[#eaf2ff]
            px-2.5 py-1 text-[9px]
            font-medium text-primary
          "
        >
          {product.tag}
        </span>

        <div
          dir="ltr"
          className="
            flex items-center gap-1
            text-[10px] font-medium text-[#333]
          "
        >
          <span>{product.rating}</span>

          <Star
            className="
              h-3.5 w-3.5
              fill-[#f3b400] text-[#f3b400]
            "
          />
        </div>
      </div>

      <h3
        className="
          mt-2 line-clamp-2 min-h-[36px]
          text-[10px] font-medium
          leading-[17px] text-[#222]
        "
      >
        {product.name}
      </h3>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-[10px] font-bold text-primary">
          {product.price} جنيهًا
        </span>

        {product.oldPrice && (
          <span className="text-[9px] text-[#555] line-through">
            {product.oldPrice}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="
          mt-auto flex h-8 w-full
          items-center justify-center gap-2
          rounded-[8px] bg-primary
          text-[10px] font-medium text-white
          transition-colors
          hover:bg-[#0948ae]
        "
      >
        <ShoppingCart className="h-3.5 w-3.5" />
        أضف إلى السلة
      </button>
    </article>
  )
}