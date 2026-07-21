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
        className="
          relative
          bg-[#d9e8fa]
          bg-no-repeat
          lg:min-h-[750px]
          lg:bg-[url('/images/home/hero.png')]
          lg:bg-cover
          lg:bg-center
        "
      >
        {/* Mobile decorative background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 overflow-hidden lg:hidden
          "
        >
          <div className="absolute -left-20 -top-24 h-[310px] w-[310px] rounded-full bg-white/25" />
          <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full border border-white/60 bg-[#b8d5f5]/45" />
        </div>

        <div
          className="
            relative mx-auto flex max-w-[1440px] flex-col
            px-4 pb-6 pt-10
            sm:px-6 sm:pt-14
            md:px-10
            lg:min-h-[750px] lg:px-16 lgpb-0 lg:pt-0
          "
        >
          <div
            className="
              flex flex-1 items-start
              lg:min-h-[570px]
            "
          >
            <div
              className="
                relative z-10 mx-auto w-full max-w-[580px] text-center
                lg:mr-auto lg:ml-0 lg:max-w-[470px] lg:pt-[105px] lg:text-right
              "
            >
              <h1
                className="
                  text-[37px] font-black leading-[1.35] tracking-tight text-black
                  min-[390px]:text-[42px]
                  sm:text-[48px]
                  md:text-[54px]
                  lg:text-[58px] lg:leading-[1.45]
                "
              >
                صحتك
                <br />
                أولوية{" "}
                <span className="text-primary">
                  لدينا
                </span>
              </h1>

              <p
                className="
                  mx-auto mt-4 max-w-[500px]
                  text-[14px] font-medium leading-[1.9] text-[#252525]
                  sm:mt-5 sm:text-[16px]
                  lg:mx-0 lg:text-[17px]
                "
              >
                اكتشف مجموعة واسعة من الأدوية ومنتجات العناية الصحية الأصلية،
                مع توصيل سريع وآمن إلى باب منزلك.
              </p>

              <Link
                to="/products"
                className="
                  mt-5 inline-flex h-[43px] items-center justify-center gap-3
                  rounded-full bg-primary px-6
                  text-[14px] font-semibold text-white
                  shadow-[0_4px_9px_rgba(0,64,170,0.25)]
                  transition duration-300
                  hover:-translate-y-0.5 hover:bg-[#043d98]
                  sm:mt-6
                "
              >
                تسوق الآن
                <CircleArrowLeft className="h-[17px] w-[17px]" />
              </Link>

              <div
                className="
                  mx-auto mt-8 grid max-w-[520px] grid-cols-1 gap-3
                  min-[430px]:grid-cols-3
                  sm:mt-10
                  lg:mx-0 lg:max-w-[430px] lg:gap-0 lg:divide-x lg:divide-x-reverse lg:divide-[#929292]
                "
              >
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <div
                      key={feature.id}
                      className="
                        flex min-h-[78px] items-center gap-3
                        rounded-[14px] border border-white/60 bg-white/45
                        px-4 py-3 text-right
                        shadow-[0_6px_18px_rgba(64,99,145,0.08)]
                        backdrop-blur-sm
                        min-[430px]:flex-col min-[430px]:justify-start min-[430px]:gap-0 min-[430px]:text-center
                        lg:min-h-[75px] lg:rounded-none lg:border-0 lg:bg-transparent
                        lg:px-3 lg:py-0 lg:shadow-none lg:backdrop-blur-none
                      "
                    >
                      <div
                        className="
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-full bg-white/70
                          min-[430px]:mb-2 min-[430px]:h-auto min-[430px]:w-auto min-[430px]:rounded-none min-[430px]:bg-transparent
                        "
                      >
                        <Icon
                          strokeWidth={2.4}
                          className="h-[23px] w-[23px] text-[#ee4f9a]"
                        />
                      </div>

                      <div>
                        <p className="text-[12px] font-medium leading-5 text-[#686868]">
                          {feature.title}
                        </p>

                        <p className="text-[11px] leading-5 text-[#777]">
                          {feature.description}
                        </p>
                      </div>
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
  return (
    <div
      className="
        relative z-20 mt-10 w-full
        lg:absolute lg:inset-x-0 lg:bottom-[1px] lg:mt-0 lg:px-8
      "
    >
      <div
        dir="rtl"
        className="
          mx-auto max-w-[1320px]
          rounded-[18px] bg-white
          p-3
          shadow-[0_7px_18px_rgba(15,23,42,0.18)]
          sm:p-4
          lg:flex lg:min-h-[148px] lg:items-center lg:overflow-hidden
          lg:rounded-[16px] lg:p-0
        "
      >
        {/* Discount card */}
        <Link
          to="/products"
          className="
            flex min-h-[108px] w-full items-center justify-between gap-4
            rounded-[14px] bg-primary px-5 py-4 text-white
            shadow-[0_4px_10px_rgba(15,23,42,0.22)]
            transition duration-300
            hover:bg-[#043d98]
            sm:min-h-[116px] sm:px-7
            lg:mx-4 lg:h-[116px] lg:w-auto lg:min-w-[275px]
            lg:justify-center lg:px-6
          "
        >
          <div className="text-right">
            <p className="text-[12px] font-medium sm:text-[13px]">
              خصومات تصل إلى
            </p>

            <p className="mt-1 text-[30px] font-black leading-none sm:text-[32px]">
              30%
            </p>

            <p className="mt-3 whitespace-nowrap text-[11px] text-white/90 sm:text-[12px]">
              على المنتجات المختارة
            </p>
          </div>

          <img
            src="/images/home/discount.svg"
            alt=""
            className="
              h-[52px] w-[52px] shrink-0 object-contain brightness-0 invert
              sm:h-[58px] sm:w-[58px]
            "
          />
        </Link>

        {/* Product offers */}
        <div
          className="
            mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            lg:mt-0 lg:grid lg:h-[105px] lg:flex-1
            lg:grid-cols-3 lg:gap-0 lg:overflow-visible lg:pb-0
            lg:divide-x lg:divide-x-reverse lg:divide-[#b8b8b8]
          "
        >
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to="/products"
              className="
                flex min-h-[105px] min-w-[245px] snap-start items-center
                justify-start gap-4 rounded-[14px]
                border border-[#e9eef5] bg-[#fbfdff]
                px-4 py-3
                transition duration-300
                hover:bg-[#f3f7fc]
                sm:min-w-[280px]
                lg:min-w-0 lg:justify-center lg:rounded-none lg:border-0
                lg:bg-white lg:px-4 lg:py-0
              "
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-[68px] w-[54px] shrink-0 object-contain lg:h-[72px] lg:w-[56px]"
              />

              <div className="min-w-0 text-right">
                <h3 className="whitespace-nowrap text-[15px] font-medium leading-6 text-[#171717] lg:text-[16px]">
                  {offer.title}
                </h3>

                {offer.secondTitle && (
                  <p className="whitespace-nowrap text-[15px] font-medium leading-6 text-[#171717] lg:text-[16px]">
                    {offer.secondTitle}
                  </p>
                )}

                <p className="mt-1 whitespace-nowrap text-[14px] text-[#888] lg:mt-2 lg:text-[15px]">
                  {offer.discount}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show all offers */}
        <div
          className="
            mt-2 flex w-full items-center justify-center
            lg:mt-0 lg:h-[148px] lg:w-auto lg:min-w-[235px] lg:px-5
          "
        >
          <Link
            to="/products"
            className="
              flex h-[54px] w-full items-center justify-center gap-3
              rounded-[13px] bg-[#edf4fd] px-5
              text-[14px] font-bold text-primary
              shadow-[0_3px_7px_rgba(15,23,42,0.14)]
              transition duration-300
              hover:bg-[#e2edfb]
              sm:text-[15px]
              lg:h-[58px] lg:w-auto lg:px-6
            "
          >
            <ArrowLeft className="h-5 w-5" />
            <span>عرض كل العروض</span>
          </Link>
        </div>
      </div>
    </div>
  )
}