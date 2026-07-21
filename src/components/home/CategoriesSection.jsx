import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export function CategoriesSection() {
  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-4 py-12 md:px-6"
    >
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">
          تسوق حسب الفئة
        </h2>

        <Link
          to="/products"
          className="border-b border-muted-foreground text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
        >
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-[0_3px_14px_rgba(15,23,42,0.12)] transition duration-300 group-hover:-translate-y-1">
              <img
                src={category.img || "/placeholder.svg"}
                alt={category.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-xs font-medium text-foreground">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}