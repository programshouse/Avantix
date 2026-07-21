import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { featuredProducts } from "@/data/products"
import { SectionHeader } from "./SectionHeader"

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
      className="mx-auto max-w-7xl px-4 pb-14 md:px-6"
    >
      <SectionHeader
        title="اكتشف منتجاتنا المميزة"
        description="تسوق حسب الفئة لديك مع خيارات فرز وتصفية ذكية"
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}