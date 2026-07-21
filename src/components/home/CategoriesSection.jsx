import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export function CategoriesSection() {
  return (
    <section dir="rtl" className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-7 flex items-center justify-between lg:mb-8">
          <h2 className="text-[20px] font-bold text-[#111111] sm:text-[24px] lg:text-[28px]">
            تسوق حسب الفئة
          </h2>

          <Link
            to="/products"
            className="
              border-b border-[#8c8c8c] pb-0.5
              text-[13px] font-semibold text-[#8c8c8c]
              transition-colors duration-300
              hover:border-primary-foreground
              hover:text-primary-foreground
              sm:text-[15px]
            "
          >
            عرض الكل
          </Link>
        </div>

        {/* Categories */}
        <div
          className="
            grid grid-cols-4 gap-x-4 gap-y-6
            sm:gap-x-6
            md:grid-cols-5
            lg:grid-cols-7 lg:gap-x-8
          "
        >
          {categories.slice(0, 7).map((category) => (
            <CategoryItem key={category.id} category={category} />
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
      className="
        group flex min-w-0 flex-col items-center
        text-center focus:outline-none
      "
    >
      {/* Sharp image card */}
      <div
        className="
          relative flex h-[76px] w-full max-w-[86px]
          items-center justify-center overflow-hidden
          rounded-[13px] border border-[#eeeeee]
          bg-[#fafafa] p-2.5

          shadow-[5px_6px_8px_rgba(0,0,0,0.18)]

          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:bg-white
          group-hover:shadow-[7px_9px_13px_rgba(0,0,0,0.22)]

          sm:h-[90px] sm:max-w-[102px] sm:p-3
          md:h-[96px] md:max-w-[110px]
          lg:h-[100px] lg:max-w-[116px]
        "
      >
        <img
          src={category.img || "/placeholder.svg"}
          alt={category.name}
          loading="lazy"
          className="
            h-full w-full object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      <span
        className="
          mt-3 line-clamp-2 min-h-[32px] w-full
          text-[10px] font-medium leading-4 text-[#191919]
          transition-colors duration-300
          sm:text-[12px]
          lg:text-[13px]
        "
      >
        {category.name}
      </span>
    </Link>
  )
}