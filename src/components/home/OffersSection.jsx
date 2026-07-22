import { Link } from "react-router-dom"
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react"
import { useCart } from "@/context/cart-context"
import { offerProducts } from "@/data/products"

function OfferProductCard({ product }) {
  const { addItem } = useCart()

  const productImage = "/images/categories/category (3).svg"

  const productName =
    product.name ||
    product.title ||
    "سنتيلا 1004 سنتيلا زيت تنظيف خفيف 200 مل"

  const categoryName =
    product.categoryName ||
    product.category?.name ||
    product.category ||
    "غسول"

  const currentPrice =
    product.salePrice ??
    product.discountPrice ??
    product.price ??
    500

  const oldPrice =
    product.oldPrice ??
    product.originalPrice ??
    product.priceBeforeDiscount ??
    750

  const discount =
    product.discountPercentage ??
    product.discount ??
    10

  const rating = product.rating ?? 4.8

  const handleAddToCart = (event) => {
    event.preventDefault()
    event.stopPropagation()
    addItem(product)
  }

  return (
    <article
      dir="rtl"
      className="
        group relative mx-auto
        w-full max-w-[245px]
        pt-[112px]
        sm:pt-[122px]
      "
    >
      {/* Favorite icon */}
      <button
        type="button"
        aria-label="إضافة إلى المفضلة"
        className="
          absolute left-[5%] top-[40px] z-30
          flex h-9 w-9 items-center justify-center
          rounded-full text-[#4b5563]
          transition-all duration-300
          hover:bg-white hover:text-[#df4d91]
        "
      >
        <Heart className="h-6 w-6 stroke-[1.8]" />
      </button>

      {/* Discount badge */}
      <span
        className="
          absolute right-[18%] top-[9px] z-30
          rounded-full bg-[#df4d91]
          px-2.5 py-1
          text-[9px] font-medium text-white
        "
      >
        خصم {discount}%
      </span>

      {/* Product image */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-[27px] z-20
          flex w-full
          -translate-x-1/2
          justify-center
        "
      >
        <img
          src={productImage}
          alt={productName}
          className="
            h-[185px] w-auto
            object-contain
            drop-shadow-[0_14px_12px_rgba(0,0,0,0.16)]
            transition-all duration-300
            group-hover:-translate-y-1
            group-hover:scale-[1.04]
            sm:h-[200px]
          "
        />
      </div>

      {/* Card */}
      <div
        className="
          overflow-hidden
          rounded-b-[12px] rounded-t-[100px]
          bg-[#e4ecf8]
          shadow-[0_3px_3px_rgba(0,0,0,0.24)]
        "
      >
        {/* Upper image background */}
        <div className="h-[140px] sm:h-[142px]" />

        {/* White information area */}
        <div
          className="
            flex min-h-[205px] flex-col
            rounded-t-[11px] bg-white
            px-3 pb-4 pt-4
          "
        >
          <div className="mb-3 flex items-center justify-between">
            <span
              className="
                rounded-full bg-[#edf3ff]
                px-2.5 py-1
                text-[10px] font-medium text-[#1d5cc7]
              "
            >
              {categoryName}
            </span>

            <div
              dir="ltr"
              className="
                flex items-center gap-1
                text-[10px] font-medium text-black
              "
            >
              <span>{rating}</span>

              <Star
                className="
                  h-4 w-4
                  fill-[#f5bc19] text-[#f5bc19]
                "
              />
            </div>
          </div>

          <h3
            className="
              mb-3 line-clamp-2
              min-h-[42px]
              text-right text-[11px]
              font-medium leading-[1.8] text-black
            "
          >
            {productName}
          </h3>

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-[11px] font-semibold text-[#0752cc]">
              {currentPrice} جنيها
            </span>

            {oldPrice && (
              <span className="text-[10px] text-black line-through">
                {oldPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="
              mt-auto flex h-[34px] w-full
              items-center justify-center gap-2
              rounded-[10px] bg-[#064dcc]
              text-[10px] font-medium text-white
              transition-all duration-300
              hover:bg-[#073fa5]
              active:scale-[0.98]
            "
          >
            <span>أضف إلى السلة</span>
               <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}

export function OffersSection() {
  return (
    <section
      dir="rtl"
      className="
        w-full bg-white
        px-5 pb-16 pt-8
        md:px-10
        lg:px-[6%]
      "
    >
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-[28px] font-medium text-black md:text-[32px]">
          العروض
        </h2>

        <Link
          to="/products"
          className="
            border-b border-[#999]
            text-[16px] font-medium text-[#999]
            transition-colors duration-300
            hover:border-primary hover:text-primary
            md:text-[18px]
          "
        >
          عرض الكل
        </Link>
      </div>

      <div
        className="
          grid grid-cols-2
          gap-x-4 gap-y-12
          md:grid-cols-3 md:gap-x-7
          lg:grid-cols-4 lg:gap-x-7
          xl:gap-x-9
        "
      >
        {offerProducts.slice(0, 4).map((product) => (
          <OfferProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}