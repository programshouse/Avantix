import {
  RotateCcw,
  Store,
  Truck,
} from "lucide-react"

const benefits = [
  {
    id: 1,
    icon: Truck,
    label: "توصيل مجاني",
  },
  {
    id: 2,
    icon: RotateCcw,
    label: "قابل للاستبدال أو الإرجاع",
  },
  {
    id: 3,
    icon: Store,
    label: "يتم البيع من الشركة",
  },
]

export function CartBenefits() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {benefits.map(({ id, icon: Icon, label }) => (
        <div
          key={id}
          className="
            flex items-center gap-1
            text-[10px] text-[#9a9a9a]
          "
        >
          <Icon className="h-3.5 w-3.5" />

          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}