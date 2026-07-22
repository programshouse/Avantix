import { useEffect, useMemo, useRef, useState } from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import {
  products,
  productTypes,
  brands,
} from "@/data/products"

const ITEMS_PER_PAGE = 6

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-border py-4 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="
          flex w-full items-center justify-between
          text-right text-sm font-bold text-foreground
        "
      >
        <ChevronDown
          className={`
            h-4 w-4 text-muted-foreground
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />

        <span>{title}</span>
      </button>

      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  )
}

function Checkbox({ label }) {
  return (
    <label
      className="
        flex cursor-pointer items-center
        justify-end gap-2
        text-[11px] text-muted-foreground
      "
    >
      <span>{label}</span>

      <input
        type="checkbox"
        className="
          h-4 w-4 rounded border-input
          accent-[var(--color-primary)]
        "
      />
    </label>
  )
}

function Sidebar({ price, setPrice }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <Card className="p-4">
        <FilterGroup title="نوع المنتج">
          <div className="max-h-56 space-y-2 overflow-y-auto pl-1">
            {productTypes.map((type, index) => (
              <Checkbox
                key={`${type}-${index}`}
                label={type}
              />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="ماركة">
          <div className="max-h-56 space-y-2 overflow-y-auto pl-1">
            {brands.map((brand, index) => (
              <Checkbox
                key={`${brand}-${index}`}
                label={brand}
              />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="السعر">
          <div
            className="
              flex items-center justify-between
              gap-2 text-xs text-muted-foreground
            "
          >
            <span className="rounded border border-input px-2 py-1">
              ج.م {price}
            </span>

            <span>—</span>

            <span className="rounded border border-input px-2 py-1">
              ج.م 500
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="9277"
            value={price}
            onChange={(event) =>
              setPrice(Number(event.target.value))
            }
            className="
              mt-3 w-full
              accent-[var(--color-primary)]
            "
          />

          <p className="mt-1 text-left text-[11px] text-muted-foreground">
            السعر: EGP 0.00 - EGP 9,277.00
          </p>
        </FilterGroup>
      </Card>
    </aside>
  )
}

function ProductsPageCard({ product }) {
  const { addItem } = useCart()
  const [favorite, setFavorite] = useState(false)

  return (
    <article
      dir="rtl"
      className="
        group relative mx-auto mt-[50px]
        flex min-h-[310px] w-full max-w-[240px] flex-col
        rounded-t-[95px] rounded-b-[12px]
        border border-[#ececec] bg-white
        shadow-[0_5px_12px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]
      "
    >
      {/* Favorite */}
      <button
        type="button"
        aria-label="إضافة إلى المفضلة"
        onClick={() =>
          setFavorite((previous) => !previous)
        }
        className="
          absolute left-[-2px] top-[-42px] z-30
          flex h-9 w-9 items-center justify-center
          text-gray-400
          transition-colors duration-300
          hover:text-secondary
        "
      >
        <Heart
          className={`
            h-[22px] w-[22px]
            ${
              favorite
                ? "fill-secondary text-secondary"
                : ""
            }
          `}
        />
      </button>

      {/* Image background */}
      <div
        className="
          relative h-[138px] shrink-0
          overflow-hidden rounded-t-[95px]
          bg-[#e7effc]
        "
      />

      {/* Product image */}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        loading="lazy"
        className="
          pointer-events-none absolute
          left-1/2 top-[-38px] z-20
          h-[170px] w-auto max-w-[88%]
          -translate-x-1/2 object-contain
          drop-shadow-[0_12px_10px_rgba(0,0,0,0.16)]
          transition-transform duration-300
          group-hover:-translate-x-1/2
          group-hover:-translate-y-1
          group-hover:scale-105
        "
      />

      {/* Card body */}
      <div
        className="
          relative z-10 flex flex-1 flex-col
          rounded-b-[12px] bg-white
          px-3 pb-3 pt-3
        "
      >
        <div className="mb-2 flex items-center justify-between">
          <span
            className="
              rounded-full bg-[#eaf2fe]
              px-2.5 py-1
              text-[12px] font-medium text-primary
            "
          >
            {product.tag || "غسول"}
          </span>

          <div
            dir="ltr"
            className="
              flex items-center gap-1
              text-[9px] font-semibold text-[#333]
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
            line-clamp-2 min-h-[38px]
            text-right text-[13px] font-medium
            leading-[18px] text-[#1f1f1f]
          "
        >
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-start gap-2">
          <span className="text-[12px] font-bold text-primary">
            {product.price} جنيهًا
          </span>

          {product.oldPrice && (
            <span className="text-[11px] text-[#706b6b] line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => addItem(product)}
          className="
            mt-auto flex h-[33px] w-full
            items-center justify-center gap-2
            rounded-[9px] bg-primary
            text-[9px] font-medium text-white
            transition-colors duration-300
            hover:bg-[#094bb3]
          "
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          أضف إلى السلة
        </button>
      </div>
    </article>
  )
}

function getPaginationItems(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    )
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages]
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null
  }

  const paginationItems = getPaginationItems(
    currentPage,
    totalPages,
  )

  return (
    <nav
      dir="rtl"
      aria-label="التنقل بين صفحات المنتجات"
      className="
        mt-14 flex items-center
        justify-center gap-2
      "
    >
      {/* Previous page */}
      <button
        type="button"
        aria-label="الصفحة السابقة"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full bg-primary text-white
          outline-none
          transition-colors duration-200
          hover:bg-[#0b4ab8]
          focus:bg-primary focus:text-white
          focus:outline-none focus:ring-0
          disabled:cursor-not-allowed
          disabled:bg-[#e5e5e5]
          disabled:text-[#a3a3a3]
          disabled:hover:bg-[#e5e5e5]
        "
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {paginationItems.map((page, index) => {
        const isDots = page === "..."
        const isActive = page === currentPage

        if (isDots) {
          return (
            <span
              key={`dots-${index}`}
              className="
                flex h-8 min-w-8 items-center
                justify-center text-[11px]
                font-semibold text-[#888]
              "
            >
              ...
            </span>
          )
        }

        return (
          <button
            key={page}
            type="button"
            aria-label={`الصفحة ${page}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={`
              flex h-8 min-w-8 items-center justify-center
              rounded-full px-2 text-[11px] font-semibold
              outline-none
              transition-colors duration-200
              focus:outline-none focus:ring-0
              ${
                isActive
                  ? `
                    bg-primary text-white
                    hover:bg-primary hover:text-white
                    focus:bg-primary focus:text-white
                  `
                  : `
                    bg-[#f1f1f1] text-[#777]
                    hover:bg-[#e4e4e4] hover:text-[#333]
                    focus:bg-[#f1f1f1] focus:text-[#777]
                  `
              }
            `}
          >
            {page}
          </button>
        )
      })}

      {/* Next page */}
      <button
        type="button"
        aria-label="الصفحة التالية"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full bg-primary text-white
          outline-none
          transition-colors duration-200
          hover:bg-[#0b4ab8]
          focus:bg-primary focus:text-white
          focus:outline-none focus:ring-0
          disabled:cursor-not-allowed
          disabled:bg-[#e5e5e5]
          disabled:text-[#a3a3a3]
          disabled:hover:bg-[#e5e5e5]
        "
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    </nav>
  )
}

export default function Products() {
  const [price, setPrice] = useState(500)
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState(
    "الترتيب حسب: الأكثر مبيعا",
  )

  const productsSectionRef = useRef(null)

  const sortedProducts = useMemo(() => {
    const productsCopy = [...products]

    if (sort === "الترتيب حسب: الأقل سعراً") {
      return productsCopy.sort(
        (firstProduct, secondProduct) =>
          Number(firstProduct.price) -
          Number(secondProduct.price),
      )
    }

    if (sort === "الترتيب حسب: الأعلى سعراً") {
      return productsCopy.sort(
        (firstProduct, secondProduct) =>
          Number(secondProduct.price) -
          Number(firstProduct.price),
      )
    }

    return productsCopy
  }, [sort])

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / ITEMS_PER_PAGE),
  )

  const visibleProducts = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE

    return sortedProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    )
  }, [currentPage, sortedProducts])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const handleSortChange = (event) => {
    setSort(event.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return
    }

    setCurrentPage(page)

    window.requestAnimationFrame(() => {
      productsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  return (
    <main
      dir="rtl"
      className="
        mx-auto max-w-7xl
        px-4 py-6 md:px-6
      "
    >
      <div className="mb-6">
        <Breadcrumb
          items={[
            {
              label: "الرئيسية",
              to: "/",
            },
            {
              label: "الأدوية",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <Sidebar
          price={price}
          setPrice={setPrice}
        />

        <div
          ref={productsSectionRef}
          className="min-w-0 flex-1 scroll-mt-6"
        >
          <div
            className="
              mb-8 flex items-center
              justify-between gap-4
            "
          >
            <h1 className="text-lg font-extrabold text-foreground">
              المنتجات
            </h1>

            <div className="relative">
              <select
                value={sort}
                onChange={handleSortChange}
                className="
                  h-10 appearance-none
                  rounded-lg border border-input
                  bg-card py-0 pl-9 pr-4
                  text-sm font-semibold text-foreground
                  focus:outline-none
                  focus:ring-2 focus:ring-ring/30
                "
              >
                <option>
                  الترتيب حسب: الأكثر مبيعا
                </option>

                <option>
                  الترتيب حسب: الأقل سعراً
                </option>

                <option>
                  الترتيب حسب: الأعلى سعراً
                </option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none absolute
                  left-3 top-1/2 h-4 w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />
            </div>
          </div>

          <div
            className="
              grid grid-cols-2
              items-stretch gap-x-5 gap-y-10
              sm:grid-cols-3
            "
          >
            {visibleProducts.map((product) => (
              <ProductsPageCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  )
}