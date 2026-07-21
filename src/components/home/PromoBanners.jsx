import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const banners = [
  {
    id: 1,
    backgroundClass: "bg-[#0057C8]",
    buttonClass: "text-primary",
    badgeBackground: "rgba(255, 255, 255, 0.15)",
    title: (
      <>
        خصم 30% على مستلزمات العناية
        <br className="hidden sm:block" />
        بالبشرة الفاخرة
      </>
    ),
    description:
      "احصلي على بشرة نضرة ومتألقة مع منتجات مرخصة طبياً وخالية من المواد الضارة.",
    buttonText: "تسوقي العرض",
  },
  {
    id: 2,
    backgroundClass: "bg-secondary",
    buttonClass: "text-secondary",
    badgeBackground: "rgba(255, 255, 255, 0.16)",
    title: (
      <>
        حماية فائقة وعناية صحية متكاملة لجميع
        <br className="hidden sm:block" />
        أفراد عائلتك
      </>
    ),
    description:
      "احصلي على بشرة نضرة ومتألقة مع منتجات مرخصة طبياً وخالية من المواد الضارة.",
    buttonText: "تسوقي العرض",
  },
]

export function PromoBanners() {
  return (
    <section
      dir="rtl"
      className="mx-auto grid max-w-7xl gap-7 px-4 py-12 md:grid-cols-2 md:px-6"
    >
      {banners.map((banner) => (
<article
  className={`
    relative min-h-[315px] overflow-hidden rounded-[18px]
    px-7 py-9 text-white
    shadow-[0_4px_6px_rgba(15,23,42,0.2)]
    transition duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_24px_rgba(15,23,42,0.18)]
    sm:px-10
    lg:min-h-[315px] lg:px-11
    ${banner.backgroundClass}
  `}
>
          <div className="relative z-10 flex h-full flex-col items-start">
            <span
              className="
                inline-flex h-[42px] items-center justify-center
                rounded-full border border-white/35 px-5
                text-[12px] font-semibold text-white
                backdrop-blur-sm
              "
              style={{ backgroundColor: banner.badgeBackground }}
            >
              عرض حصري ومحدود
            </span>

            <h2
              className="
                mt-5 max-w-[500px]
                text-[25px] font-black leading-[1.55]
                sm:text-[29px]
                lg:text-[31px]
              "
            >
              {banner.title}
            </h2>

            <p
              className="
                mt-3 max-w-[520px]
                text-[12px] font-medium leading-7 text-white/90
                sm:text-[13px]
              "
            >
              {banner.description}
            </p>

            <Link
              to="/products"
              className={`
                mt-[8px] inline-flex h-[43px] items-center justify-center
                gap-2 rounded-[10px] bg-white px-4
                text-[13px] font-bold
                shadow-[0_3px_8px_rgba(0,0,0,0.14)]
                transition duration-300
                hover:-translate-y-0.5 hover:bg-white/95
                ${banner.buttonClass}
              `}
            >
              <span>{banner.buttonText}</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

      


        </article>
      ))}
    </section>
  )
}