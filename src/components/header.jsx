import { Link, NavLink, useNavigate } from "react-router-dom"
import { Heart, ShoppingCart, UserRound, Search } from "lucide-react"
import { useCart } from "@/context/cart-context"

const navLinks = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/products", label: "الأصناف" },
  { to: "/offers", label: "العروض" },
  { to: "/about", label: "من نحن" },
]

export function Header() {
  const { count } = useCart()
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const search = formData.get("search")?.trim()

    navigate(
      search
        ? `/products?search=${encodeURIComponent(search)}`
        : "/products",
    )
  }

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_4px_rgba(15,23,42,0.12)]"
    >
      {/* Top header */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8 lg:px-14">
          {/* Logo - Right */}
          <Link
            to="/"
            aria-label="الصفحة الرئيسية"
            className="justify-self-start"
          >
            <img
              src="/images/logo.svg"
              alt="Avantix"
              className="h-14 w-auto object-contain md:h-18"
            />
          </Link>

          {/* Search - Center */}
          <form
            onSubmit={handleSearch}
            className="relative hidden w-[360px] md:block lg:w-[510px]"
          >
            <input
              type="search"
              name="search"
              placeholder="ابحث هنا"
              className="h-[38px] w-full rounded-[11px] border-0 bg-[#eeeeee] pr-5 pl-11 text-right text-xs text-slate-700 outline-none placeholder:text-[#8c8c8c] focus:ring-2 focus:ring-[#0b4dbb]/20"
            />

            <button
              type="submit"
              aria-label="بحث"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#949494] transition-colors hover:text-[#0b4dbb]"
            >
              <Search strokeWidth={1.7} className="h-[18px] w-[18px]" />
            </button>
          </form>

          {/* Actions - Left */}
          <div
            dir="ltr"
            className="flex items-center justify-self-end gap-[18px] text-black"
          >
            <button
              type="button"
              aria-label="المفضلة"
              className="transition-colors hover:text-[#0b4dbb]"
            >
              <Heart strokeWidth={1.8} className="h-[20px] w-[20px]" />
            </button>

            <Link
              to="/cart"
              aria-label="عربة التسوق"
              className="relative transition-colors hover:text-[#0b4dbb]"
            >
              <ShoppingCart
                strokeWidth={1.8}
                className="h-[20px] w-[20px]"
              />

              {count > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#e01f7a] px-1 text-[9px] font-bold leading-none text-white">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            <Link
              to="/account/orders"
              aria-label="حسابي"
              className="transition-colors hover:text-[#0b4dbb]"
            >
              <UserRound
                strokeWidth={1.8}
                className="h-[20px] w-[20px]"
              />
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <form
          onSubmit={handleSearch}
          className="relative mx-5 mb-3 block md:hidden"
        >
          <input
            type="search"
            name="search"
            placeholder="ابحث هنا"
            className="h-10 w-full rounded-lg border-0 bg-[#eeeeee] pr-4 pl-11 text-right text-sm text-slate-700 outline-none placeholder:text-[#8c8c8c] focus:ring-2 focus:ring-[#0b4dbb]/20"
          />

          <button
            type="submit"
            aria-label="بحث"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#949494]"
          >
            <Search strokeWidth={1.7} className="h-[18px] w-[18px]" />
          </button>
        </form>
      </div>

      {/* Navigation */}
      <nav className="h-[48px] bg-[#064ab7] text-white">
        <ul className="mx-auto flex h-full max-w-[1440px] items-center justify-center gap-8 overflow-x-auto px-4 text-[16px] font-medium sm:gap-12 md:gap-16 lg:gap-[72px]">
          {navLinks.map((link) => (
            <li key={link.label} className="h-full shrink-0">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  [
                    "relative flex h-full items-center justify-center whitespace-nowrap px-1 text-white/90 transition-colors hover:text-white",
                    isActive
                      ? "font-semibold text-white after:absolute after:bottom-[7px] after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:rounded-full after:bg-white"
                      : "",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}