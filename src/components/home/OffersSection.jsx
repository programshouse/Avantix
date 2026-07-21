import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { offerProducts } from "@/data/products"

export function OffersSection() {
  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-4 pb-14 md:px-6"
    >
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-foreground">
          العروض
        </h2>

        <Link
          to="/products"
          className="flex items-center gap-1 text-sm font-semibold text-primary"
        >
          عرض الكل
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {offerProducts.map((product) => (
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