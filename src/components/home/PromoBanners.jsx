import { Link } from "react-router-dom"

const banners = [
  {
    id: 1,
    image: "/offers/banner1.svg",
    alt: "عرض العناية الصحية",
  },
  {
    id: 2,
    image: "/offers/banner2.svg",
    alt: "عرض العناية بالبشرة",
  },
]

export function PromoBanners() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-2 md:px-6">
      {banners.map((banner) => (
        <Link
          key={banner.id}
          to="/products"
          className="group block overflow-hidden rounded-2xl"
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </Link>
      ))}
    </section>
  )
}