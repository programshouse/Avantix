import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Wallet, CreditCard } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/context/cart-context"

function Field({ label, error, children }) {
  return (
    <div className="text-right">
      <label className="mb-1.5 block text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  )
}

function PaymentOption({ id, selected, onSelect, icon: Icon, title, sub }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`flex w-full items-center gap-3 rounded-xl border p-4 text-right transition-colors ${
        selected ? "border-primary bg-secondary" : "border-border bg-card hover:border-primary/40"
      }`}
    >
      <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selected ? "border-primary" : "border-muted-foreground"}`}>
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
      </span>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{sub}</p>
        </div>
      </div>
    </button>
  )
}

function Summary() {
  const { items, subtotal, count } = useCart()
  return (
    <Card className="p-5 text-right">
      <div className="max-h-72 space-y-3 overflow-y-auto pl-1">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-4 space-y-3 rounded-lg bg-secondary/60 p-4 text-sm">
        <div className="flex justify-between">
          <span className="font-bold">{count} منتج</span>
          <span className="text-muted-foreground">عدد المنتجات</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">{subtotal.toFixed(2)} ج.م</span>
          <span className="text-muted-foreground">المجموع الفرعي</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-[var(--color-success)]">مجاناً</span>
          <span className="text-muted-foreground">رسوم الشحن</span>
        </div>
        <div className="flex justify-between border-t border-border pt-3 text-base font-bold">
          <span className="text-primary">{subtotal.toFixed(2)} ج.م</span>
          <span>المجموع</span>
        </div>
      </div>
    </Card>
  )
}

export default function Checkout() {
  const [payment, setPayment] = useState("cod")
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    navigate("/orders")
  }

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

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="order-2 lg:order-1">
          <h2 className="mb-4 text-right text-lg font-bold text-foreground">ملخص طلبك</h2>
          <Summary />
          <Button type="submit" className="mt-4 w-full" size="lg">
            تأكيد الطلب
          </Button>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <Card className="p-6">
            <h2 className="mb-5 text-right text-lg font-bold text-foreground">تفاصيل الشحن</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="الاسم الأول" error={errors.firstName && "مطلوب"}>
                <Input placeholder="أحمد" className="text-right" {...register("firstName", { required: true })} />
              </Field>
              <Field label="اسم العائلة" error={errors.lastName && "مطلوب"}>
                <Input placeholder="حسين" className="text-right" {...register("lastName", { required: true })} />
              </Field>
              <Field label="رقم الهاتف" error={errors.phone && "مطلوب"}>
                <Input placeholder="20+" className="text-right" {...register("phone", { required: true })} />
              </Field>
              <Field label="البريد الإلكتروني" error={errors.email && "بريد غير صالح"}>
                <Input
                  placeholder="@gmail"
                  className="text-right"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="العنوان" error={errors.address && "مطلوب"}>
                  <textarea
                    rows={3}
                    placeholder="طنطا"
                    className="w-full rounded-lg border border-input bg-card p-3 text-right text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                    {...register("address", { required: true })}
                  />
                </Field>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-5 text-right text-lg font-bold text-foreground">طريقة الدفع</h2>
            <div className="space-y-3">
              <PaymentOption
                id="cod"
                selected={payment === "cod"}
                onSelect={setPayment}
                icon={Wallet}
                title="الدفع عند الاستلام"
                sub="ادفع عند استلام طلبك"
              />
              <PaymentOption
                id="card"
                selected={payment === "card"}
                onSelect={setPayment}
                icon={CreditCard}
                title="بطاقة ائتمان / بطاقة خصم"
                sub="ادفع الآن"
              />
            </div>
          </Card>
        </div>
      </form>
    </div>
  )
}
