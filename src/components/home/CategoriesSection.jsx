import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export function CategoriesSection() {
  return (
    <section dir="rtl" className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-6 flex items-center justify-between sm:mb-7">
          <h2 className="text-[20px] font-medium text-black sm:text-[23px] lg:text-[26px]">
            تسوق حسب الفئة
          </h2>

          <Link
            to="/products"
            className="border-b border-[#8d8d8d] text-[13px] font-medium text-[#8d8d8d] transition-colors duration-300 hover:border-primary hover:text-primary sm:text-[14px] lg:text-[16px]"
          >
            عرض الكل
          </Link>
        </div>

        {/* Mobile */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:hidden [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-[96px] shrink-0 snap-start"
            >
              <CategoryItem category={category} />
            </div>
          ))}
        </div>

        {/* Tablet and Desktop */}
        <div className="hidden grid-cols-4 gap-x-5 gap-y-8 sm:grid md:grid-cols-5 lg:grid-cols-7 lg:gap-x-7 xl:gap-x-9">
          {categories.slice(0, 7).map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryItem({ category }) {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group flex min-w-0 flex-col items-center text-center"
    >
      <div
        className="
          flex aspect-[1.15/1] w-full max-w-[96px]
          items-center justify-center overflow-hidden
          rounded-[12px] bg-[#f7f7f7] p-2.5
          shadow-[3px_4px_9px_rgba(15,23,42,0.16)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[3px_7px_14px_rgba(15,23,42,0.2)]
          sm:max-w-[100px]
          md:max-w-[105px]
          lg:max-w-[110px]
        "
      >
        <img
          src={category.img || "/placeholder.svg"}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <span className="mt-3 line-clamp-2 min-h-[36px] max-w-[120px] text-[11px] font-medium leading-[18px] text-[#1d1d1d] sm:text-[12px] lg:text-[13px]">
        {category.name}
      </span>
    </Link>
  )
}