import { Trash2, Truck, RotateCcw, Store, Minus, Plus } from "lucide-react"
import { Card } from "./ui/card"
import { useCart } from "@/context/cart-context"

export function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()

  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <button
          onClick={() => removeItem(item.id)}
          aria-label="حذف المنتج"
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        <div className="flex flex-1 flex-col text-right">
          <div className="flex items-start justify-between gap-3">
            <span className="whitespace-nowrap text-sm font-bold text-primary">{item.price} جنيها</span>
            <p className="text-sm font-semibold leading-snug text-foreground">{item.name}</p>
          </div>

          <p className="mt-1 text-xs text-primary">اطلب في غضون ساعتين و10 دقيقة</p>

          <div className="mt-2 flex flex-wrap items-center justify-end gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><Store className="h-3 w-3" /> يتم البيع من الشركة</span>
            <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> غير قابل للاستبدال ولا الإرجاع</span>
            <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> توصيل مجاني</span>
          </div>

          <div className="mt-3 flex items-center justify-end">
            <div className="flex items-center gap-3 rounded-full border border-border px-3 py-1">
              <button onClick={() => updateQty(item.id, 1)} aria-label="زيادة" className="text-primary">
                <Plus className="h-4 w-4" />
              </button>
              <span className="min-w-4 text-center text-sm font-bold">{item.qty}</span>
              <button onClick={() => updateQty(item.id, -1)} aria-label="إنقاص" className="text-muted-foreground">
                <Minus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-24 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary/60">
          <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-auto object-contain" />
        </div>
      </div>
    </Card>
  )
}
