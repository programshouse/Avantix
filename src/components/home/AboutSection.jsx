import { Link } from "react-router-dom"
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseMedical,
  Headphones,
  Star,
} from "lucide-react"
import { IoBagAddOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";

import { stats } from "@/data/products"

const statIcons = [
  IoBagAddOutline,
  MdOutlineDiscount,
  TfiHeadphoneAlt,
  FaRegStar,
]

export function AboutSection() {
  return (
    <section
      dir="rtl"
      className="
        w-full bg-white
        px-5 py-16
        md:px-10 md:py-20
        lg:px-[6%]
      "
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-[34px] font-bold text-black md:text-[44px]">
            من نحن
          </h2>

          <p className="mt-2 text-[14px] font-normal text-[#777] md:text-[17px]">
            شريكك الموثوق للحصول على الأدوية والمنتجات الطبية الأصلية
          </p>
        </div>

        {/* About content */}
        <div
          className="
            grid items-center gap-10
            lg:grid-cols-2 lg:gap-16
          "
        >
          {/* Text content */}
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <h3
              className="
                mx-auto max-w-[630px]
                text-[26px] font-bold leading-[1.55] text-[#0750b7]
                md:text-[34px]
                lg:mx-0
              "
            >
              شريكك الموثوق للحصول على الأدوية
              <br className="hidden md:block" />
              والمنتجات{" "}
              <span className="text-[#df4d91]">
                الطبية الأصلية
              </span>
            </h3>

            <p
              className="
                mx-auto mt-4 max-w-[650px]
                text-[14px] leading-8 text-[#777]
                md:text-[16px]
                lg:mx-0
              "
            >
              نسعى إلى توفير تجربة شراء إلكترونية آمنة وسهلة تتيح لك
              الوصول إلى الأدوية والمنتجات الطبية الأصلية من خلال منصة
              موثوقة.
            </p>

            <Link
              to="/about"
              className="
                mt-6 inline-flex h-[48px]
                min-w-[155px] items-center justify-center gap-3
                rounded-[12px] bg-[#0750c9]
                px-7 text-[14px] font-medium text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#063fa1]
                hover:shadow-[0_10px_20px_rgba(7,80,201,0.18)]
              "
            >
              <span>اعرف المزيد</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          {/* About image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div
              className="
                relative w-full max-w-[610px]
                overflow-hidden
              "
            >
              <img
                src="/images/home/about.png"
                alt="منتجات طبية أصلية"
                className="
                  h-auto w-full
                  object-contain
                "
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div
          className="
            mt-14 overflow-hidden
            rounded-[13px] border border-[#e7e7e7]
            bg-white
            px-4 py-5
            md:mt-16 md:px-6
          "
        >
          <div
            className="
              grid grid-cols-2
              gap-y-7
              md:grid-cols-4 md:gap-y-0
            "
          >
            {stats.slice(0, 4).map((stat, index) => {
              const Icon = statIcons[index] || Star

              return (
                <div
                  key={stat.label}
                  className={`
                    relative flex items-center justify-center gap-4
                    px-3
                    ${
                      index !== 3
                        ? "md:border-l md:border-[#d7d7d7]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex h-[48px] w-[48px] shrink-0
                      items-center justify-center
                      rounded-full bg-[#f8e3ee]
                    "
                  >
                    <Icon
                      className="
                        h-[21px] w-[21px]
                        fill-[#df4d91] text-[#df4d91]
                      "
                    />
                  </div>

                  <div className="text-right">
                    <span
                      className="
                        block text-[18px] font-bold text-black
                        md:text-[20px]
                      "
                    >
                      {stat.value}
                    </span>

                    <span
                      className="
                        mt-1 block text-[12px] text-[#777]
                        md:text-[14px]
                      "
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}