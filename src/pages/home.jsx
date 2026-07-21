import { Link } from "react-router-dom"
import {
  ChevronLeft,
  Headphones,
  ShieldCheck,
  Truck,
  Percent,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { categories, featuredProducts, offerProducts, stats } from "@/data/products"

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/70 p-6 md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 text-right md:order-1">
            <img
              src="/products/hero-supplements.png"
              alt="مجموعة منتجات صحية ومكملات غذائية"
              className="mx-auto max-h-80 w-auto object-contain"
            />
          </div>
          <div className="order-1 text-right md:order-2">
            <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              صحتك
              <br />
              <span className="text-primary">أولوية لدينا</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:mr-auto">
              اكتشف مجموعة واسعة من الأدوية ومنتجات العناية الصحية الأصلية التي توصل سريعاً وأمان إلى منزلك.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link to="/products">تسوق الآن</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Headphones, title: "دعم على مدار الساعة", sub: "خدمة عملاء 24/7" },
            { icon: ShieldCheck, title: "منتجات أصلية 100%", sub: "مضمونة الجودة" },
            { icon: Truck, title: "توصيل سريع وآمن", sub: "لكل المناطق" },
          ].map((f) => (
            <Card key={f.title} className="flex items-center gap-3 p-4 text-right">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.sub}</p>
              </div>
            </Card>
          ))}
          <Card className="flex items-center gap-3 bg-primary p-4 text-right text-primary-foreground">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Percent className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold">30%</p>
              <p className="text-xs text-white/80">خصم على المنتجات المختارة</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, sub }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">{title}</h2>
      {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
    </div>
  )
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/products" className="flex items-center gap-1 text-sm font-semibold text-primary">
          عرض الكل <ChevronLeft className="h-4 w-4" />
        </Link>
        <h2 className="text-xl font-extrabold text-foreground">تسوق حسب الفئة</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        {categories.map((cat) => (
          <Link key={cat.id} to="/products" className="group flex flex-col items-center gap-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary p-2 transition-transform group-hover:scale-105">
              <img src={cat.img || "/placeholder.svg"} alt={cat.name} className="h-full w-full object-contain" />
            </div>
            <span className="text-xs font-semibold text-foreground">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeader title="اكتشف منتجاتنا المميزة" sub="تسوق حسب الفئة مع خيارات فرز وتصفية دقيقة" />
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {["الكل", "العناية بالبشرة", "الفيتامينات", "مستحضرات التجميل", "الأدوية"].map((t, i) => (
          <button
            key={t}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

function PromoBanners() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 md:grid-cols-2 md:px-6">
      <Card className="bg-accent p-8 text-right text-accent-foreground">
        <span className="text-xs font-semibold text-white/80">حماية صحية متكاملة</span>
        <h3 className="mt-2 text-2xl font-extrabold leading-snug">
          حماية فائقة وعناية صحية متكاملة لجميع أفراد عائلتك
        </h3>
        <Button asChild variant="muted" className="mt-5 bg-white text-accent hover:bg-white/90">
          <Link to="/products">تسوق الآن</Link>
        </Button>
      </Card>
      <Card className="bg-primary p-8 text-right text-primary-foreground">
        <span className="text-xs font-semibold text-white/80">عروض حصرية محدودة</span>
        <h3 className="mt-2 text-2xl font-extrabold leading-snug">
          خصم 30% على مستلزمات العناية بالبشرة الفاخرة
        </h3>
        <Button asChild variant="muted" className="mt-5 bg-white text-primary hover:bg-white/90">
          <Link to="/products">تسوق الآن</Link>
        </Button>
      </Card>
    </section>
  )
}

function Offers() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/products" className="flex items-center gap-1 text-sm font-semibold text-primary">
          عرض الكل <ChevronLeft className="h-4 w-4" />
        </Link>
        <h2 className="text-xl font-extrabold text-foreground">العروض</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {offerProducts.map((p) => (
          <ProductCard key={p.id} product={p} offer />
        ))}
      </div>
    </section>
  )
}

function AboutUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeader title="من نحن" sub="شريكك الموثوق للحصول على الأدوية والمنتجات الطبية الأصلية" />
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-secondary">
            <img src="/products/about-meds.png" alt="منتجات طبية أصلية" className="h-56 w-56 rounded-full object-cover" />
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-extrabold leading-snug text-primary">
            شريكك الموثوق للحصول على الأدوية والمنتجات الطبية الأصلية
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            نسعى في أفنتكس لتوفير تجربة تسوق إلكترونية آمنة وسهلة لكل ما يخص صحتك وعناية أسرتك، مع ضمان أصالة المنتجات
            وسرعة التوصيل إلى باب منزلك في جميع أنحاء الجمهورية.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/about">اعرف المزيد</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex flex-col items-center gap-1 p-6 text-center">
            <Star className="mb-1 h-5 w-5 fill-[var(--color-star)] text-[var(--color-star)]" />
            <span className="text-2xl font-extrabold text-primary">{s.value}</span>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <PromoBanners />
      <Offers />
      <AboutUs />
    </>
  )
}
