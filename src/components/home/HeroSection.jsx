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
      className="
        relative overflow-hidden
        border-t-2 border-primary
        bg-[#dce9fa]
      "
    >
      <div
        className="
          relative mx-auto
          min-h-[780px] w-full
      ]
          bg-[url('/images/home/hero.png')]
          bg-cover bg-center bg-no-repeat

          max-lg:min-h-0
          max-lg:bg-none
        "
      >
        {/* Mobile background image */}
        <div className="relative hidden max-lg:block">
          <img
            src="/images/home/hero.png"
            alt=""
            aria-hidden="true"
            className="
              h-[340px] w-full
              object-cover object-[65%_center]
              sm:h-[430px]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#dce9fa]" />
        </div>

        {/* Desktop text positioned above background */}
        <div
          className="
            absolute z-10
            left-[9%] top-[125px]
            w-[390px]
            text-right

            min-[1200px]:left-[8%]
            min-[1400px]:left-[9%]

            max-lg:relative
            max-lg:left-auto max-lg:top-auto
            max-lg:mx-auto
            max-lg:-mt-5
            max-lg:w-full
            max-lg:max-w-[620px]
            max-lg:px-5
            max-lg:pb-8
            max-lg:text-center
          "
        >
          <h1
            className="
              text-[48px] font-black
              leading-[1.35] tracking-tight
              text-black

              min-[1200px]:text-[52px]
              min-[1400px]:text-[56px]

              max-lg:text-[44px]
              max-sm:text-[34px]
            "
          >
            صحتك
            <br />

            <span className="inline-flex items-baseline gap-3">
              <span>أولوية</span>
              <span className="text-primary">لدينا</span>
            </span>
          </h1>

          <p
            className="
              mt-4 text-[15px] font-medium
              leading-[1.9] text-[#252525]

              min-[1400px]:text-[16px]

              max-lg:mx-auto
              max-lg:max-w-[520px]
              max-sm:text-[14px]
            "
          >
            اكتشف مجموعة واسعة من الأدوية ومنتجات العناية الصحية الأصلية، مع
            توصيل سريع وآمن إلى باب منزلك.
          </p>

          <Link
            to="/products"
            className="
              mt-5 inline-flex h-[42px]
              items-center justify-center gap-3
              rounded-full bg-primary
              px-5 text-[13px] font-semibold
              text-white
              shadow-[0_5px_10px_rgba(0,64,170,0.25)]
              transition duration-300
              hover:-translate-y-0.5
              hover:bg-[#043d98]
            "
          >
            <span>تسوق الآن</span>
            <CircleArrowLeft className="h-[17px] w-[17px]" />
          </Link>

          <Features />
        </div>

        {/* Offers positioned at bottom of background */}
        <div
          className="
            absolute z-20
            bottom-[30px] left-1/2
            w-[calc(100%-80px)]
            max-w-[1320px]
            -translate-x-1/2

            max-lg:relative
            max-lg:bottom-auto
            max-lg:left-auto
            max-lg:mt-0
            max-lg:w-full
            max-lg:max-w-none
            max-lg:translate-x-0
            max-lg:px-4
            max-lg:pb-7
          "
        >
          <OffersStrip />
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <div
      className="
        mt-8 grid grid-cols-3

        max-lg:mx-auto
        max-lg:max-w-[500px]

        max-[470px]:grid-cols-1
      "
    >
      {features.map((feature, index) => {
        const Icon = feature.icon

        return (
          <div
            key={feature.id}
            className="
              relative flex min-h-[70px]
              flex-col items-center justify-center
              px-3 text-center

              max-[470px]:min-h-[74px]
              max-[470px]:flex-row
              max-[470px]:gap-3
              max-[470px]:py-3
            "
          >
            {/* Center divider */}
            {index !== features.length - 1 && (
              <span
                aria-hidden="true"
                className="
                  absolute left-0 top-1/2
                  h-[46px] w-px
                  -translate-y-1/2
                  bg-[#9aa3ad]

                  max-[470px]:bottom-0
                  max-[470px]:left-1/2
                  max-[470px]:top-auto
                  max-[470px]:h-px
                  max-[470px]:w-[70%]
                  max-[470px]:-translate-x-1/2
                  max-[470px]:translate-y-0
                "
              />
            )}

            <Icon
              strokeWidth={2.3}
              className="
                mb-2 h-[21px] w-[21px]
                shrink-0 text-[#ed4f99]

                max-[470px]:mb-0
              "
            />

            <div className="flex flex-col items-center justify-center">
              <p className="text-[11px] font-medium leading-[1.6] text-[#666]">
                {feature.title}
              </p>

              <p className="text-[10px] leading-[1.6] text-[#777]">
                {feature.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function OffersStrip() {
  return (
    <div
      dir="rtl"
      className="
        flex min-h-[124px] w-full
        items-center overflow-hidden
        rounded-[14px] bg-white
        p-3
        shadow-[0_7px_18px_rgba(15,23,42,0.2)]

        max-lg:flex-col
        max-lg:items-stretch
        max-lg:overflow-visible
        max-lg:rounded-[18px]
      "
    >
      {/* Main discount card */}
      <Link
        to="/products"
        className="
          flex h-[100px]
          w-[260px] shrink-0
          items-center justify-center
          gap-6 rounded-[12px]
          bg-primary px-5
          text-white
          shadow-[0_4px_10px_rgba(15,23,42,0.18)]
          transition duration-300
          hover:bg-[#043d98]

          min-[1400px]:w-[275px]

          max-lg:h-[110px]
          max-lg:w-full
          max-lg:justify-between
          max-lg:px-7
        "
      >
        <div className="text-right">
          <p className="text-[11px] font-medium">
            خصومات تصل إلى
          </p>

          <p className="mt-1 text-[30px] font-black leading-none">
            30%
          </p>

          <p className="mt-3 whitespace-nowrap text-[11px] text-white/90">
            على المنتجات المختارة
          </p>
        </div>

        <img
          src="/images/home/discount.svg"
          alt=""
          className="
            h-[48px] w-[48px]
            shrink-0 object-contain
            brightness-0 invert
          "
        />
      </Link>

      {/* Offers */}
      <div
        className="
          grid h-[92px] min-w-0 flex-1
          grid-cols-3
          divide-x divide-x-reverse
          divide-[#c5c5c5]

          max-lg:mt-3
          max-lg:flex
          max-lg:h-auto
          max-lg:snap-x
          max-lg:snap-mandatory
          max-lg:gap-3
          max-lg:overflow-x-auto
          max-lg:pb-2
          max-lg:divide-x-0
          max-lg:[scrollbar-width:none]
          max-lg:[&::-webkit-scrollbar]:hidden
        "
      >
        {offers.map((offer) => (
          <Link
            key={offer.id}
            to="/products"
            className="
              flex min-w-0
              items-center justify-center
              gap-3 px-3
              transition duration-300
              hover:bg-[#f7faff]

              max-lg:min-h-[100px]
              max-lg:min-w-[250px]
              max-lg:snap-start
              max-lg:justify-start
              max-lg:rounded-[13px]
              max-lg:border
              max-lg:border-[#e7edf5]
              max-lg:bg-[#fbfdff]
              max-lg:px-4
            "
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="
                h-[62px] w-[48px]
                shrink-0 object-contain
              "
            />

            <div className="min-w-0 text-right">
              <h3 className="whitespace-nowrap text-[14px] font-medium leading-6 text-[#171717]">
                {offer.title}
              </h3>

              {offer.secondTitle && (
                <p className="whitespace-nowrap text-[14px] font-medium leading-6 text-[#171717]">
                  {offer.secondTitle}
                </p>
              )}

              <p className="mt-1 whitespace-nowrap text-[13px] text-[#888]">
                {offer.discount}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* All offers button */}
      <div
        className="
          flex h-[100px]
          w-[210px] shrink-0
          items-center justify-center
          px-4

          max-lg:mt-2
          max-lg:h-auto
          max-lg:w-full
          max-lg:px-0
        "
      >
        <Link
          to="/products"
          className="
            flex h-[52px]
            items-center justify-center
            gap-3 rounded-[12px]
            bg-[#edf4fd]
            px-5
            text-[14px] font-bold
            text-primary
            shadow-[0_3px_7px_rgba(15,23,42,0.14)]
            transition duration-300
            hover:bg-[#e1ecfa]

            max-lg:w-full
          "
        >
          <ArrowLeft className="h-5 w-5" />
          <span>عرض كل العروض</span>
        </Link>
      </div>
    </div>
  )
}