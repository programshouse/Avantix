import { useParams } from "react-router-dom"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/context/cart-context"

const steps = [
  { label: "قبول الطلب", date: "5 اغسطس 2026", done: true },
  { label: "شحن", date: "12 اغسطس 2026", done: true },
  { label: "الوصول", date: "", done: false },
]

const paymentLines = [
  { label: "مسكن الم", value: "90 جنيها" },
  { label: "كريم مرطب", value: "200 جنيها" },
  { label: "كريم مرطب", value: "200 جنيها" },
  { label: "كريم مرطب", value: "200 جنيها" },
  { label: "كريم مرطب", value: "200 جنيها" },
  { label: "خصم", value: "90 جنيها", highlight: true },
  { label: "توصيل", value: "20 جنيها" },
]

function Timeline() {
  return (
    <div className="flex items-center justify-between px-2">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-1 flex-col items-center">
          <div className="flex w-full items-center">
            {i > 0 && (
              <div className={`h-0.5 flex-1 ${steps[i - 1].done ? "bg-primary" : "border-t-2 border-dashed border-muted-foreground/40"}`} />
            )}
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                step.done ? "bg-primary text-primary-foreground" : "border-2 border-muted-foreground/40 bg-card"
              }`}
            >
              {step.done && <Check className="h-4 w-4" />}
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 flex-1 ${step.done ? "bg-primary" : "border-t-2 border-dashed border-muted-foreground/40"}`} />
            )}
          </div>
          <p className="mt-2 text-sm font-bold text-foreground">{step.label}</p>
          {step.date && <p className="text-xs text-muted-foreground">{step.date}</p>}
        </div>
      ))}
    </div>
  )
}

export default function OrderDetails() {
  const { id } = useParams()
  const { items } = useCart()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-end gap-4">
        <div className="rounded-lg bg-secondary/60 px-4 py-2 text-right text-sm">
          <span className="font-bold text-foreground">طلب: {id}</span>
          <span className="mx-2 text-muted-foreground">|</span>
          <span className="text-muted-foreground">5 منتجات</span>
          <span className="mx-2 text-muted-foreground">|</span>
          <span className="text-[var(--color-success)]">خصم 200.5 جنيه</span>
          <span className="mx-2 text-muted-foreground">|</span>
          <span className="font-bold text-primary">2345.5 جنيه</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="order-2 space-y-6 lg:order-1">
          <Card className="p-5 text-right">
            <h3 className="mb-3 font-bold text-foreground">عنوان التوصيل</h3>
            <p className="text-sm font-semibold text-foreground">المنزل</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              25 شارع البدر الجامعه طنطا قسم ثاني - ورى عربيتفانى
            </p>
          </Card>

          <Card className="p-5 text-right">
            <h3 className="mb-4 font-bold text-foreground">تفاصيل الدفع</h3>
            <div className="space-y-3 text-sm">
              {paymentLines.map((line, i) => (
                <div key={i} className="flex justify-between">
                  <span className={line.highlight ? "font-semibold text-primary" : "text-muted-foreground"}>
                    {line.value}
                  </span>
                  <span className={line.highlight ? "font-semibold text-primary" : "text-foreground"}>{line.label}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-dashed border-border pt-3 text-base font-bold">
                <span className="text-primary">220 جنيها</span>
                <span>مجموع</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="mb-6 text-right text-lg font-bold text-foreground">
            المنتجات المطلوبة وتفاصيل الطلب <span className="text-sm font-normal text-muted-foreground">— طلب: {id}</span>
          </h2>

          <Card className="mb-6 p-6">
            <Timeline />
          </Card>

          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
