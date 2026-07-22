import { Link } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/context/cart-context"
import { products } from "@/data/products"

function formatPrice(value) {
  return Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function Summary() {
  const { subtotal, items } = useCart()

  const itemsCount = items.reduce(
    (total, item) =>
      total + (item.qty ?? item.quantity ?? 1),
    0,
  )

  return (
    <section
      dir="rtl"
      className="
        rounded-[16px]
        border border-[#e0e0e0]
        bg-white px-6 py-6
        shadow-[0_3px_10px_rgba(0,0,0,0.04)]
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-bold text-[#222]">
          ملخص الطلب
        </h3>

        <span className="text-[14px] text-[#777]">
          {itemsCount} منتج
        </span>
      </div>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#777]">
            المجموع الفرعي
          </span>

          <span
            dir="ltr"
            className="text-[15px] font-semibold text-[#222]"
          >
            {formatPrice(subtotal)} ج.م.
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#777]">
            رسوم الشحن
          </span>

          <span className="text-[15px] font-semibold text-[#079548]">
            مجانًا
          </span>
        </div>

        <div className="border-t border-dashed border-[#d8d8d8]" />

        <div className="flex items-center justify-between">
          <span className="text-[15px] font-bold text-[#222]">
            المجموع
          </span>

          <span
            dir="ltr"
            className="text-[16px] font-bold text-[#222]"
          >
            {formatPrice(subtotal)} ج.م.
          </span>
        </div>
      </div>
    </section>
  )
}

function CheckoutSidebar() {
  return (
    <aside dir="rtl" className="w-full text-right">
      <Summary />

      <Button
        asChild
        className="
          mt-4 h-[52px] w-full
          rounded-[12px] bg-primary
          text-[16px] font-semibold text-white
          hover:bg-[#0948ae]
        "
      >
        <Link to="/checkout">
          صفحة الدفع
        </Link>
      </Button>

      {/* Notes */}
      <section className="mt-14">
        <label
          htmlFor="order-note"
          className="
            mb-3 block
            text-[15px] font-bold text-[#222]
          "
        >
          ملاحظاتك على الأوردر
        </label>

        <textarea
          id="order-note"
          placeholder="ممكن تكتب ملاحظتك بخصوص الطلب"
          className="
            h-[130px] w-full resize-none
            rounded-[14px]
            border border-[#d8d8d8]
            bg-white px-4 py-4
            text-right text-[14px]
            text-[#333] outline-none
            placeholder:text-[#aaa]
            focus:border-primary
          "
        />
      </section>

      {/* Coupon */}
      <section className="mt-8">
        <label
          htmlFor="coupon"
          className="
            mb-3 block
            text-[15px] font-bold text-[#222]
          "
        >
          ادخل الكود
        </label>

        <div className="flex items-center gap-3">
          <input
            id="coupon"
            type="text"
            placeholder="كود"
            className="
              h-[48px] min-w-0 flex-1
              rounded-[12px]
              border border-[#dfdfdf]
              bg-white px-4
              text-right text-[14px]
              text-[#333] outline-none
              placeholder:text-[#999]
              focus:border-primary
            "
          />

          <button
            type="button"
            className="
              flex h-[48px] w-[105px]
              shrink-0 items-center justify-center
              rounded-[12px] bg-primary
              text-[14px] font-semibold text-white
              transition-colors
              hover:bg-[#0948ae]
            "
          >
            تطبيق
          </button>
        </div>
      </section>
    </aside>
  )
}
function RecommendedCard({ product }) {
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
      />

      {/* Favorite */}
      <button
        type="button"
        aria-label="إضافة إلى المفضلة"
        className="
          absolute left-5 top-8 z-30
          flex h-8 w-8 items-center justify-center
          text-[#535b66]
          transition-colors duration-300
          hover:text-secondary
        "
      >
        <Heart className="h-5 w-5" />
      </button>

      {/* Floating 3D image */}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = "/placeholder.svg"
        }}
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
            className="
              flex items-center gap-1
              text-[11px] font-semibold text-[#333]
            "
          >
            <span>{product.rating || "4.8"}</span>

            <Star
              className="
                h-3.5 w-3.5
                fill-[#f2b807] text-[#f2b807]
              "
            />
          </div>
        </div>

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

        <div className="mt-3 flex items-center justify-start gap-2">
          <span
            className="
              text-[12px] font-bold text-primary
              sm:text-[13px]
            "
          >
            {product.price} جنيهًا
          </span>

          {product.oldPrice && (
            <span
              className="
                text-[10px] text-[#999] line-through
                sm:text-[11px]
              "
            >
              {product.oldPrice}
            </span>
          )}
        </div>

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

function Recommended() {
  const recommendedItems = products.slice(0, 3)

  return (
    <section
      dir="rtl"
      className="
        relative mt-10
        min-h-[430px]
        rounded-[20px]
        border border-[#d9d9d9]
        bg-white px-10 pb-10 pt-7
      "
    >
      <h3 className="text-right text-[26px] font-semibold text-[#303030]">
        يُنصح بها لأجلك
      </h3>

      <div
        className="
          mt-8 grid grid-cols-1 gap-7
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {recommendedItems.map((product) => (
          <RecommendedCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="السابق"
        className="
          absolute right-[-14px] top-1/2
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full border border-[#e0e0e0]
          bg-white text-[#777]
          shadow-md
        "
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <button
        type="button"
        aria-label="التالي"
        className="
          absolute left-[-14px] top-1/2
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full border border-[#e0e0e0]
          bg-white text-[#777]
          shadow-md
        "
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    </section>
  )
}

function EmptyCart() {
  return (
    <div
      dir="rtl"
      className="
        flex min-h-[220px] flex-col
        items-center justify-center
        rounded-[16px]
        border border-[#d9d9d9]
        bg-white px-6 text-center
      "
    >
      <ShoppingCart className="h-12 w-12 text-[#bbb]" />

      <h2 className="mt-4 text-[18px] font-bold text-[#333]">
        عربة التسوق فارغة
      </h2>

      <p className="mt-2 text-[14px] text-[#999]">
        لم تقم بإضافة أي منتجات بعد
      </p>

      <Button
        asChild
        className="
          mt-5 h-11 px-8
          text-[14px]
        "
      >
        <Link to="/products">
          متابعة التسوق
        </Link>
      </Button>
    </div>
  )
}

export default function Cart() {
  const { items } = useCart()

  return (
<main
  dir="rtl"
  className="
    mx-auto
    min-h-screen
    max-w-[1600px]
    px-6 py-8
    md:px-8
    xl:px-10
  "
>
      {/* Breadcrumb */}
      <div
        className="
          mb-9 flex items-center gap-2
          text-[14px] text-[#888]
        "
      >
        <Link
          to="/"
          className="
            transition-colors
            hover:text-primary
          "
        >
          الرئيسية
        </Link>

        <ChevronLeft className="h-4 w-4 text-[#aaa]" />

        <span className="font-semibold text-primary">
          عربة التسوق
        </span>
      </div>

      <div
        className="
          grid w-full items-start gap-10
          lg:grid-cols-[minmax(0,1fr)_380px]
        "
      >
        {/* Cart content on the right */}
        <div className="order-1 min-w-0">
          {items.length > 0 ? (
            <div className="space-y-5">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <EmptyCart />
          )}

          <Recommended />
        </div>

        {/* Summary on the left */}
        <div className="order-2">
          <CheckoutSidebar />
        </div>
      </div>
    </main>
  )
}