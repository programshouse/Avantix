import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "./logo"

const columns = [
  {
    title: "روابط سريعة",
    links: ["الرئيسية", "الاصناف", "العروض", "من نحن"],
  },
  {
    title: "خدمة العملاء",
    links: ["تتبع الطلب", "سياسة الإرجاع", "الشحن والتوصيل", "الأسئلة الشائعة"],
  },
  {
    title: "الأقسام",
    links: ["الأدوية", "العناية بالبشرة", "الفيتامينات", "مستحضرات التجميل"],
  },
]

export function Footer() {
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-block rounded-lg bg-white p-3">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            أفنتكس متجرك الموثوق للحصول على الأدوية ومنتجات العناية والتجميل الأصلية بأفضل الأسعار وأسرع توصيل.
          </p>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="تواصل اجتماعي"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-bold">{col.title}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="/products" className="transition-colors hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/70 md:flex-row md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> 19000</span>
            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> support@aventix.com</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> القاهرة، مصر</span>
          </div>
          <p>© 2026 أفنتكس. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
