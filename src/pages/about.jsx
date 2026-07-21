import { ShieldCheck, Truck, Headphones, Award } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { stats } from "@/data/products"

const values = [
  { icon: ShieldCheck, title: "منتجات أصلية", desc: "جميع منتجاتنا أصلية 100% ومضمونة الجودة والمصدر." },
  { icon: Truck, title: "توصيل سريع", desc: "نوصل طلبك بأمان وسرعة إلى باب منزلك في كل المناطق." },
  { icon: Headphones, title: "دعم مستمر", desc: "فريق خدمة عملاء متاح على مدار الساعة للإجابة على استفساراتك." },
  { icon: Award, title: "أفضل الأسعار", desc: "أسعار تنافسية وعروض حصرية على مدار العام." },
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="mb-6">
        <Breadcrumb items={[{ label: "الرئيسية", to: "/" }, { label: "من نحن" }]} />
      </div>

      <section className="grid items-center gap-8 rounded-2xl bg-secondary/70 p-8 md:grid-cols-2 md:p-12">
        <div className="flex justify-center">
          <img src="/products/about-meds.png" alt="منتجات طبية أصلية" className="max-h-72 w-auto rounded-2xl object-contain" />
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-extrabold leading-snug text-foreground md:text-4xl">
            شريكك الموثوق لصحة <span className="text-primary">أفضل</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            أفنتكس منصة متخصصة في توفير الأدوية ومنتجات العناية والتجميل الأصلية بأسعار مناسبة. نسعى لجعل تجربة التسوق
            الصحي أسهل وأكثر أماناً لكل أفراد الأسرة، مع الالتزام الكامل بأصالة المنتجات ومعايير الجودة.
          </p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex flex-col items-center gap-1 p-6 text-center">
            <span className="text-2xl font-extrabold text-primary">{s.value}</span>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </Card>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-foreground">لماذا تختار أفنتكس؟</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title} className="p-6 text-right">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
