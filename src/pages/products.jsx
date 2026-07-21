import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductCard } from "@/components/product-card"
import { Card } from "@/components/ui/card"
import { products, productTypes, brands } from "@/data/products"

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-right text-sm font-bold text-foreground"
      >
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "" : "-rotate-90"}`} />
        {title}
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  )
}

function Checkbox({ label }) {
  return (
    <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-muted-foreground">
      {label}
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-input accent-[var(--color-primary)]"
      />
    </label>
  )
}

function Sidebar({ price, setPrice }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <Card className="p-4">
        <FilterGroup title="نوع المنتج">
          <div className="max-h-56 space-y-2 overflow-y-auto pl-1">
            {productTypes.map((t, i) => (
              <Checkbox key={i} label={t} />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="ماركة">
          <div className="max-h-56 space-y-2 overflow-y-auto pl-1">
            {brands.map((b, i) => (
              <Checkbox key={i} label={b} />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="السعر">
          <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span className="rounded border border-input px-2 py-1">ج.م {price}</span>
            <span>—</span>
            <span className="rounded border border-input px-2 py-1">ج.م 500</span>
          </div>
          <input
            type="range"
            min="0"
            max="9277"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--color-primary)]"
          />
          <p className="mt-1 text-left text-[11px] text-muted-foreground">
            السعر: EGP 0.00 - EGP 9,277.00
          </p>
        </FilterGroup>
      </Card>
    </aside>
  )
}

function Pagination() {
  const pages = [70, "..", 4, 3, 2, 1]
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {pages.map((p, i) => (
        <button
          key={i}
          className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-semibold transition-colors ${
            p === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
          }`}
        >
          {p}
        </button>
      ))}
      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <ChevronDown className="h-4 w-4 rotate-90" />
      </button>
    </div>
  )
}

export default function Products() {
  const [price, setPrice] = useState(500)
  const [sort, setSort] = useState("الأكثر مبيعا")

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="mb-6">
        <Breadcrumb items={[{ label: "الرئيسية", to: "/" }, { label: "الأدوية" }]} />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <Sidebar price={price} setPrice={setPrice} />

        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 appearance-none rounded-lg border border-input bg-card pr-4 pl-9 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option>الترتيب حسب: الأكثر مبيعا</option>
                <option>الترتيب حسب: الأقل سعراً</option>
                <option>الترتيب حسب: الأعلى سعراً</option>
              </select>
              <ChevronDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <h1 className="text-lg font-extrabold text-foreground">المنتجات</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  )
}
