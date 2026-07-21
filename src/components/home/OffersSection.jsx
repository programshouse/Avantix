import { Link } from "react-router-dom"
import { ProductCard } from "@/components/product-card"
import { offerProducts } from "@/data/products"

export function OffersSection() {
  return (
    <section
      dir="rtl"
      className="
        w-full bg-white
        px-5 pb-16 pt-10
        md:px-10
        lg:px-[6%]
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[28px] font-medium text-black md:text-[34px]">
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
          gap-x-4 gap-y-16
          md:grid-cols-3 md:gap-x-7
          lg:grid-cols-4 lg:gap-x-9
        "
      >
        {offerProducts.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            offer
          />
        ))}
      </div>
    </section>
  )
}