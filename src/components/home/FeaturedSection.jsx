import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { featuredProducts } from "@/data/products"

const filters = [
  { id: "all", label: "الكل" },
  { id: "skin-care", label: "العناية بالبشرة" },
  { id: "vitamins", label: "الفيتامينات" },
  { id: "cosmetics", label: "مستحضرات التجميل" },
  { id: "medicine", label: "الأدوية" },
]

export function FeaturedSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const displayedProducts =
    activeFilter === "all"
      ? featuredProducts
      : featuredProducts.filter(
          (product) => product.category === activeFilter,
        )

  return (
    <section
      dir="rtl"
      className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[27px] font-bold leading-[1.4] text-black sm:text-[34px] lg:text-[42px]">
            اكتشف منتجاتنا المميزة
          </h2>

          <p className="mt-2 text-[13px] font-normal leading-7 text-[#777777] sm:mt-3 sm:text-[15px] lg:text-[17px]">
            تسوق حسب الفئة لديك مع خيارات فرز وتصفية ذكية
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div
            className="
              -mx-4 flex snap-x snap-mandatory items-center gap-2
              overflow-x-auto px-4 pb-2
              sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible
              sm:px-0 sm:pb-0
              [&::-webkit-scrollbar]:hidden
            "
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`
                    shrink-0 snap-start rounded-[13px]
                    px-4 py-2 text-[12px] font-medium
                    transition-all duration-300
                    sm:px-5 sm:text-[13px]
                    lg:px-6 lg:py-2.5 lg:text-[14px]
                    ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-[#f1f1f1] text-[#858585] hover:bg-[#e8eef9] hover:text-primary"
                    }
                  `}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Products */}
        {displayedProducts.length > 0 ? (
          <div
            className="
              mt-10 grid grid-cols-2 gap-x-3 gap-y-7
              sm:mt-12 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9
              md:gap-x-7
              lg:mt-16 lg:grid-cols-4 lg:gap-x-12
              xl:gap-x-16
            "
          >
            {displayedProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="mx-auto w-full max-w-[220px] sm:max-w-[235px] lg:max-w-[245px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 flex min-h-[220px] items-center justify-center text-center">
            <p className="text-sm text-[#777777] sm:text-base">
              لا توجد منتجات في هذه الفئة حالياً
            </p>
          </div>
        )}
      </div>
    </section>
  )
}