import { Link } from "react-router-dom"
import {
  ArrowLeft,
  CircleArrowLeft,
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
    title: "الفيتامينات",
    secondTitle: "والمكملات الغذائية",
    discount: "خصم حتى 30%",
  },
  {
    id: 3,
    image: "/images/home/offer3.svg",
    title: "العناية بالبشرة",
    discount: "خصم حتى 20%",
  },
]

export function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden border-t-2 border-primary bg-[#d9e8fa]"
    >
      <div
        className="relative min-h-[705px] bg-cover bg-center bg-no-repeat lg:min-h-[850px]"
        style={{
          backgroundImage: "url('/images/home/hero.png')",
        }}
      >
        <div className="mx-auto min-h-[705px] max-w-[1440px] px-5 md:px-10 lg:px-16">
          <div className="flex min-h-[540px] items-start">
            {/* Left text content */}
            <div className="mr-auto w-full max-w-[470px] pt-16 text-right sm:pt-20 lg:pt-[120px]">
              <h1 className="text-[44px] font-black leading-[1.45] tracking-tight text-black sm:text-[54px] lg:text-[58px]">
                صحتك
                <br />
                أولوية <span className="text-[#064fc2]">لدينا</span>
              </h1>

              <p className="mt-5 text-[15px] font-medium leading-[1.9] text-[#151515] sm:text-[17px]">
                اكتشف مجموعة واسعة من الأدوية ومنتجات
                <br className="hidden sm:block" />
                العناية الصحية الأصلية، مع توصيل سريع وآمن إلى باب منزلك.
              </p>

              <Link
                to="/products"
                className="mt-6 inline-flex h-[42px] items-center justify-center gap-3 rounded-full bg-[#064fc2] px-5 text-[14px] font-semibold text-white shadow-[0_3px_5px_rgba(0,0,0,0.18)] transition hover:bg-[#043d98]"
              >
                تسوق الآن
                <CircleArrowLeft className="h-[17px] w-[17px]" />
              </Link>

              <div className="mt-10 grid max-w-[430px] grid-cols-3 divide-x divide-[#929292]">
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <div
                      key={feature.id}
                      className="flex min-h-[75px] flex-col items-center justify-start px-3 text-center"
                    >
                      <Icon
                        strokeWidth={2.4}
                        className="mb-2 h-[24px] w-[24px] text-[#ee4f9a]"
                      />

                      <p className="text-[12px] font-medium leading-5 text-[#777]">
                        {feature.title}
                      </p>

                      <p className="text-[11px] leading-5 text-[#777]">
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
      title: "الفيتامينات",
      secondTitle: "والمكملات الغذائية",
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
    <div className="absolute inset-x-0 bottom-[1px] z-10  px-4 md:px-8">
      <div
        dir="rtl"
        className="mx-auto flex min-h-[148px] max-w-[1320px] items-center overflow-hidden rounded-[16px] bg-white shadow-[0_4px_6px_rgba(15,23,42,0.25)]"
      >
        {/* Discount card - right */}
        <Link
          to="/products"
          className="mx-4 flex h-[116px] min-w-[275px] items-center justify-center gap-5 rounded-[13px] bg-[#064fc2] px-6 text-white shadow-[0_3px_5px_rgba(15,23,42,0.3)] transition hover:bg-[#043d98]"
        >
          <div className="text-right">
            <p className="text-[13px] font-medium">
              خصومات تصل إلى
            </p>

            <p className="mt-1 text-[32px] font-black leading-none">
              30%
            </p>

            <p className="mt-3 whitespace-nowrap text-[12px] text-white/90">
              على المنتجات المختارة
            </p>
          </div>

          <img
            src="/images/home/discount.svg"
            alt=""
            className="h-[55px] w-[55px] shrink-0 object-contain brightness-0 invert"
          />
        </Link>

        {/* Product offers */}
        <div className="grid h-[105px] flex-1 grid-cols-3 divide-x divide-x-reverse divide-[#b8b8b8]">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to="/products"
              className="flex min-w-0 items-center justify-center gap-4 px-5 transition hover:bg-slate-50"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-[72px] w-[56px] shrink-0 object-contain"
              />

              <div className="min-w-0 text-right">
                <h3 className="whitespace-nowrap text-[16px] font-medium leading-6 text-[#171717]">
                  {offer.title}
                </h3>

                {offer.secondTitle && (
                  <p className="whitespace-nowrap text-[16px] font-medium leading-6 text-[#171717]">
                    {offer.secondTitle}
                  </p>
                )}

                <p className="mt-2 whitespace-nowrap text-[15px] text-[#888888]">
                  {offer.discount}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show all offers - left */}
        <div className="flex h-[148px] min-w-[235px] items-center justify-center px-5">
          <Link
            to="/products"
            className="flex h-[58px] items-center justify-center gap-3 rounded-[13px] bg-[#edf4fd] px-6 text-[15px] font-bold text-[#064fc2] shadow-[0_3px_4px_rgba(15,23,42,0.2)] transition hover:bg-[#e2edfb]"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>عرض كل العروض</span>
          </Link>
        </div>
      </div>
    </div>
  )
}