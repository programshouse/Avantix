import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { stats } from "@/data/products"
import { SectionHeader } from "./SectionHeader"

export function AboutSection() {
  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6"
    >
      <SectionHeader
        title="من نحن"
        description="شريكك الموثوق للحصول على الأدوية والمنتجات الطبية الأصلية"
      />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="text-right">
          <h3 className="text-2xl font-extrabold leading-relaxed text-primary">
            شريكك الموثوق للحصول على الأدوية والمنتجات الطبية الأصلية
          </h3>

          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            نسعى في أفنتكس لتوفير تجربة تسوق إلكترونية آمنة وسهلة
            لكل ما يخص صحتك وعناية أسرتك، مع ضمان أصالة المنتجات
            وسرعة التوصيل إلى باب منزلك.
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-6"
          >
            <Link to="/about">اعرف المزيد</Link>
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-full bg-secondary">
            <img
              src="/products/about-meds.png"
              alt="منتجات طبية أصلية"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="flex flex-col items-center gap-1 p-6 text-center"
          >
            <Star className="mb-1 h-5 w-5 fill-star text-star" />

            <span className="text-2xl font-extrabold text-primary">
              {stat.value}
            </span>

            <span className="text-xs text-muted-foreground">
              {stat.label}
            </span>
          </Card>
        ))}
      </div>
    </section>
  )
}