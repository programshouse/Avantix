import { Link } from "react-router-dom"
import { Star, ShoppingCart } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/context/cart-context"
import { products } from "@/data/products"

function Summary() {
  const { subtotal } = useCart()
  return (
    <Card className="p-5 text-right">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-sm text-muted-foreground">1 منتج</span>
        <h3 className="font-bold text-foreground">ملخص الطلب</h3>
      </div>
      <div className="space-y-3 py-4 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold">{subtotal.toFixed(2)} ج.م</span>
          <span className="text-muted-foreground">المجموع الفرعي</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-[var(--color-success)]">مجاناً</span>
          <span className="text-muted-foreground">رسوم الشحن</span>
        </div>
      </div>
      <div className="flex justify-between border-t border-border py-3 text-base font-bold">
        <span className="text-primary">{subtotal.toFixed(2)} ج.م</span>
        <span>المجموع</span>
      </div>
      <Button asChild className="mt-2 w-full" size="lg">
        <Link to="/checkout">صفحة الدفع</Link>
      </Button>
    </Card>
  )
}

function Recommended() {
  const { addItem } = useCart()
  const recs = products.slice(0, 3)
  return (
    <Card className="mt-6 p-5">
      <h3 className="mb-4 text-right text-lg font-bold text-foreground">يُنصح بها لأجلك</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {recs.map((p) => (
          <Card key={p.id} className="p-3 text-right">
            <div className="flex h-32 items-center justify-center rounded-lg bg-secondary/50">
              <img src={p.image || "/placeholder.svg"} alt={p.name} className="h-28 w-auto object-contain" />
            </div>
            <p className="mt-2 flex items-center gap-1 text-xs font-bold">
              <Star className="h-3 w-3 fill-[var(--color-star)] text-[var(--color-star)]" /> {p.rating}
            </p>
            <p className="mt-1 line-clamp-2 text-xs font-semibold text-foreground">{p.name}</p>
            <div className="mt-2 flex items-center justify-between">
              <Button onClick={() => addItem(p)} size="icon" className="h-8 w-8">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <div className="text-left">
                <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>{" "}
                <span className="text-sm font-bold text-primary">{p.price} جنيها</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}

export default function Cart() {
  const { items } = useCart()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="mb-6">
        <Breadcrumb items={[{ label: "الرئيسية", to: "/" }, { label: "عربة التسوق" }]} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="order-2 lg:order-1">
          <Summary />
          <Card className="mt-6 p-5 text-right">
            <label className="mb-2 block text-sm font-bold text-foreground">ملاحظاتك على الاوردر</label>
            <textarea
              rows={4}
              placeholder="ممكن تعبئته بحرص"
              className="w-full rounded-lg border border-input bg-card p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <label className="mb-2 mt-4 block text-sm font-bold text-foreground">ادخل الكود</label>
            <div className="flex gap-2">
              <Button variant="default">تطبيق</Button>
              <Input placeholder="كود" className="text-right" />
            </div>
          </Card>
        </div>

        <div className="order-1 space-y-4 lg:order-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Recommended />
        </div>
      </div>
    </div>
  )
}
