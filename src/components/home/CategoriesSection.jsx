import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export function CategoriesSection() {
  return (
    <section dir="rtl" className="bg-white py-6 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-3 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between sm:mb-7">
          <h2 className="text-[18px] font-bold text-[#111827] sm:text-[22px] lg:text-[26px]">
            تسوق حسب الفئة
          </h2>

          <Link
            to="/products"
            className="border-b border-[#8d8d8d] pb-0.5 text-[12px] font-semibold text-[#6b7280] transition-colors duration-300 hover:border-[#0652d2] hover:text-[#0652d2] sm:text-[14px] lg:text-[15px]"
          >
            عرض الكل
          </Link>
        </div>

        {/* Categories Grid - Always 4 items per row on Mobile & Tablet */}
        <div className="grid grid-cols-4 gap-x-2.5 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-6 lg:gap-x-6 xl:grid-cols-7">
          {categories.map((category) => (
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
      className="group flex flex-col items-center text-center focus:outline-none"
    >
      {/* Image Box */}
      <div
        className="
          relative flex aspect-square w-full max-w-[85px]
          items-center justify-center overflow-hidden
          rounded-[14px] bg-[#f8fafc] p-2
          border border-[#f1f5f9]
          shadow-[0_2px_8px_rgba(0,0,0,0.04)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:border-[#e2e8f0]
          group-hover:bg-white
          group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]
          sm:max-w-[100px] sm:p-3 sm:rounded-[18px]
          md:max-w-[110px]
          lg:max-w-[120px]
        "
      >
        <img
          src={category.img || "/placeholder.svg"}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <span
        className="
          mt-2 line-clamp-2 min-h-[30px] w-full
          text-[10px] font-medium leading-[14px] text-[#334155]
          transition-colors duration-200 group-hover:text-[#0652d2]
          sm:mt-2.5 sm:min-h-[34px] sm:text-[12px] sm:leading-[17px] lg:text-[13px]
        "
      >
        {category.name}
      </span>
    </Link>
  )
}