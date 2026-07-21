import { Link } from "react-router-dom"
import {
  ArrowLeftCircle,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react"

const features = [
  {
    id: 1,
    icon: Truck,
    title: "توصيل سريع إلى",
    description: "جميع المناطق",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "منتجات أصلية 100%",
    description: "مضمونة",
  },
  {
    id: 3,
    icon: Headphones,
    title: "دعم على مدار",
    description: "الساعة 24/7",
  },
]

export function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden border-t-2 border-primary bg-[#dceafb]"
    >
      {/* Hero background */}
      <div
        className="relative min-h-[560px] bg-cover bg-center bg-no-repeat md:min-h-[620px]"
        style={{
          backgroundImage: "url('images/home/hero.png')",
        }}
      >
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-start px-4 py-16 md:min-h-[620px] md:px-6 lg:px-10 lg:py-20">
          {/* Text is positioned on the left */}
          <div
            dir="rtl"
            className="mr-auto w-full max-w-[480px] text-right md:pt-4 lg:pt-8"
          >
            <h1 className="text-4xl font-extrabold leading-[1.35] text-black sm:text-5xl lg:text-[58px]">
              صحتك
              <br />
              أولوية <span className="text-primary">لدينا</span>
            </h1>

            <p className="mt-5 max-w-[450px] text-sm font-medium leading-8 text-slate-800 sm:text-base">
              اكتشف مجموعة واسعة من الأدوية ومنتجات
              <br className="hidden sm:block" />
              العناية الصحية الأصلية، مع توصيل سريع وآمن
              <br className="hidden sm:block" />
              إلى باب منزلك.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
            >
              تسوق الآن
              <ArrowLeftCircle className="h-4 w-4" />
            </Link>

            <div className="mt-10 grid max-w-[460px] grid-cols-3 divide-x divide-slate-400/70">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center px-2 text-center"
                  >
                    <Icon
                      strokeWidth={2}
                      className="mb-2 h-6 w-6 text-accent"
                    />

                    <p className="text-xs font-medium text-slate-600">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <OffersStrip />
      </div>
    </section>
  )
}

function OffersStrip() {
  const offers = [
    {
      id: 1,
      image: "/images/home/offer1.svg",
      title: "مسكنات الألم",
      discount: "خصم حتى 20%",
    },
    {
      id: 2,
      image: "/images/home/offer2.svg",
      title: "الفيتامينات والمكملات الغذائية",
      discount: "خصم حتى 30%",
    },
    {
      id: 3,
      image: "/images/home/offer3.svg",
      title: "العناية بالبشرة",
      discount: "خصم حتى 20%",
    },
  ]

  return (
    <div className="absolute inset-x-0 bottom-7 px-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-stretch overflow-hidden rounded-2xl bg-white shadow-[0_4px_8px_rgba(15,23,42,0.2)] md:flex-row">
        <Link
          to="/products"
          className="flex min-h-24 min-w-[190px] items-center justify-center gap-3 bg-[#eef5ff] px-6 text-sm font-bold text-primary transition hover:bg-[#e2edff]"
        >
          عرض كل العروض
          <span className="text-xl">←</span>
        </Link>

        <div className="grid flex-1 grid-cols-1 divide-y divide-slate-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to="/products"
              className="flex min-h-24 items-center justify-center gap-4 px-4 py-3 transition hover:bg-slate-50"
            >
              <div className="min-w-0 text-right">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {offer.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {offer.discount}
                </p>
              </div>

              <img
                src={offer.image}
                alt={offer.title}
                className="h-16 w-14 shrink-0 object-contain"
              />
            </Link>
          ))}
        </div>

        <Link
          to="/products"
          className="flex min-h-28 min-w-[220px] items-center justify-center gap-5 bg-primary px-6 text-white transition hover:bg-primary-dark md:min-h-24"
        >
          <div className="flex h-12 w-12 items-center justify-center">
            <img
              src="/images/home/discount.svg"
              alt=""
              className="h-11 w-11 object-contain brightness-0 invert"
            />
          </div>

          <div className="text-right">
            <p className="text-xs font-medium">خصومات تصل إلى</p>

            <p className="mt-1 text-3xl font-extrabold">30%</p>

            <p className="mt-1 text-[11px] text-white/85">
              على المنتجات المختارة
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}