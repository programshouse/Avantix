import { Star, ShoppingCart } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useCart } from "@/context/cart-context"

export function ProductCard({ product, offer = false }) {
  const { addItem } = useCart()

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative flex h-44 items-center justify-center bg-secondary/60">
        <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-full bg-white/70" aria-hidden="true" />
        {offer && (
          <Badge className="absolute right-3 top-3 z-10 bg-accent text-accent-foreground">عرض خاص</Badge>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="relative z-10 h-36 w-auto object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 text-right">
        <div className="mb-2 flex items-center justify-between">
          <Badge className="bg-secondary text-secondary-foreground">{product.tag}</Badge>
          <span className="flex items-center gap-1 text-xs font-bold text-foreground">
            <Star className="h-3.5 w-3.5 fill-[var(--color-star)] text-[var(--color-star)]" />
            {product.rating}
          </span>
        </div>

        <p className="mb-3 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-foreground">
          {product.name}
        </p>

        <div className="mb-3 flex items-center justify-end gap-2">
          <span className="text-xs text-muted-foreground line-through">{product.oldPrice}</span>
          <span className="text-sm font-bold text-primary">{product.price} جنيها</span>
        </div>

        <Button onClick={() => addItem(product)} className="mt-auto w-full" size="sm">
          <ShoppingCart className="h-4 w-4" />
          أضف الى السلة
        </Button>
      </div>
    </Card>
  )
}
