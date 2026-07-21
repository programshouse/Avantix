import { Link } from "react-router-dom"
import { Search, PackageCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { orders } from "@/data/products"

function CompletedOrder({ order }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-end gap-2 text-sm font-semibold text-foreground">
        تم التوصيل الثلاثاء، 2 اغسطس، 2:30
        <PackageCheck className="h-5 w-5 text-primary" />
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild>
          <Link to={`/orders/${order.id}`}>عرض الطلب</Link>
        </Button>

        <div className="flex items-center gap-3 text-right">
          <div>
            <p className="text-sm font-semibold text-foreground">{order.product.name}</p>
            <p className="mt-1 text-sm font-bold text-primary">500 جنيها</p>
            <p className="mt-1 text-xs text-muted-foreground">رقم المنتج: {order.product.sku}</p>
          </div>
          <div className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary/60">
            <img src={order.product.image || "/placeholder.svg"} alt={order.product.name} className="h-full w-auto object-contain" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Orders() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:px-6">
      <div className="mb-8 flex flex-col items-end gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
        <h1 className="text-3xl font-extrabold text-foreground">الطلبات</h1>
        <div className="relative w-full max-w-xs">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="البحث عن المنتجات"
            className="h-10 w-full rounded-lg border border-input bg-card pr-10 pl-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>
      </div>

      <div className="rounded-2xl bg-secondary/60 p-4 md:p-6">
        <h2 className="mb-4 text-right text-lg font-bold text-foreground">مكتمل</h2>
        <div className="space-y-4">
          {orders.map((o) => (
            <CompletedOrder key={o.id} order={o} />
          ))}
        </div>
      </div>
    </div>
  )
}
