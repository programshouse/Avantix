import { Link, NavLink, useNavigate } from "react-router-dom"
import { Heart, ShoppingCart, User, Search } from "lucide-react"
import { Logo } from "./logo"
import { useCart } from "@/context/cart-context"

const navLinks = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/products", label: "الاصناف" },
  { to: "/products", label: "العروض" },
  { to: "/about", label: "من نحن" },
]

export function Header() {
  const { count } = useCart()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button aria-label="المفضلة" className="text-foreground/70 transition-colors hover:text-primary">
            <Heart className="h-5 w-5" />
          </button>
          <Link to="/cart" aria-label="عربة التسوق" className="relative text-foreground/70 transition-colors hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -left-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
          <Link to="/account/orders" aria-label="حسابي" className="text-foreground/70 transition-colors hover:text-primary">
            <User className="h-5 w-5" />
          </Link>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            navigate("/products")
          }}
          className="relative mx-auto flex w-full max-w-xl items-center"
        >
          <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="ابحث هنا"
            className="h-10 w-full rounded-lg bg-muted pr-10 pl-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </form>

        <Link to="/" aria-label="أفنتكس الصفحة الرئيسية">
          <Logo />
        </Link>
      </div>

      <nav className="bg-primary text-primary-foreground">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3 text-sm font-semibold md:px-6">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `pb-1 transition-colors hover:text-white ${
                    isActive && link.end ? "border-b-2 border-white" : "text-white/85"
                  }`
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
