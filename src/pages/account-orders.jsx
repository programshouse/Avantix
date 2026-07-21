import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, FileText, Wallet, Heart, ReceiptText, User } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { orders } from "@/data/products"

const tabs = [
  { id: "all", label: "الكل" },
  { id: "pending", label: "قيد الانتظار" },
  { id: "delivered", label: "تم التسليم" },
  { id: "cancelled", label: "الملغية" },
]

const menu = [
  { icon: FileText, label: "طلباتي", active: true },
  { icon: Wallet, label: "عمليات الدفع" },
  { icon: Heart, label: "المفضلة" },
  { icon: ReceiptText, label: "الفواتير" },
  { icon: User, label: "حسابي" },
]

function AccountSidebar() {
  return (
    <aside className="w-full shrink-0 text-right lg:w-64">
      <div className="border-b border-border pb-4">
        <h3 className="text-lg font-extrabold text-primary">أهلا بك</h3>
        <p className="text-sm text-muted-foreground">وسام خالد</p>
      </div>
      <ul className="mt-4 space-y-1">
        {menu.map((m) => (
          <li key={m.label}>
            <button
              className={`flex w-full items-center justify-end gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                m.active ? "bg-secondary font-bold text-primary" : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {m.label}
              <m.icon className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function OrderRow({ order }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Link
          to={`/orders/${order.id}`}
          aria-label="عرض الطلب"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>

        <div className="flex-1 text-right">
          <div className="mb-2 flex items-center justify-end gap-2 text-xs">
            <Badge className="bg-[#fdf3e3] text-[var(--color-star)]">{order.statusLabel}</Badge>
            <span className="text-muted-foreground">{order.date}</span>
          </div>
          <p className="text-sm font-bold text-foreground">
            رقم الطلب: <span className="text-primary">{order.id}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{order.product.desc}</p>
          <div className="mt-2 flex items-center justify-end gap-2">
            <span className="text-xs text-muted-foreground line-through">750</span>
            <span className="text-sm font-bold text-primary">500 جنيها</span>
          </div>
        </div>

        <div className="flex h-24 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary/60">
          <img src={order.product.image || "/placeholder.svg"} alt={order.product.name} className="h-full w-auto object-contain" />
        </div>
      </div>
    </Card>
  )
}

export default function AccountOrders() {
  const [tab, setTab] = useState("all")
  const filtered = tab === "all" ? orders : orders.filter((o) => o.status === tab)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "الرئيسية", to: "/" },
            { label: "حسابي", to: "/account/orders" },
            { label: "طلباتي" },
          ]}
        />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row-reverse">
        <AccountSidebar />

        <div className="flex-1">
          <div className="mb-6 flex flex-wrap justify-end gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tab === t.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((o) => (
              <OrderRow key={o.id} order={o} />
            ))}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-sm text-muted-foreground">لا توجد طلبات في هذه الحالة</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
