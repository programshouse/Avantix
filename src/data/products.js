export const categories = [
  { id: "skin", name: "العناية بالبشرة", img: "/products/cream.png" },
  { id: "vitamins", name: "الفيتامينات", img: "/products/hero-supplements.png" },
  { id: "medicine", name: "الأدوية", img: "/products/medicine-box.png" },
  { id: "cosmetics", name: "مستحضرات التجميل", img: "/products/serum.png" },
  { id: "supplements", name: "المكملات الغذائية", img: "/products/hero-supplements.png" },
  { id: "care", name: "العناية الشخصية", img: "/products/cleanser.png" },
  { id: "baby", name: "منتجات الأطفال", img: "/products/cream.png" },
  { id: "all", name: "عرض الكل", img: "/products/serum.png" },
]

export const productTypes = [
  "أدوية القلب",
  "أدوية الأوعية الدموية",
  "أدوية خفض الكوليسترول",
  "أدوية العناية المركزة",
  "مستحضرات تجميل",
  "مكملات غذائية",
  "فيتامينات",
  "منتجات عناية",
]

export const brands = ["Acdima", "ADCO", "Adwia", "Biomed", "Bayer", "GSK", "Pfizer", "Sanofi"]

const img = ["/products/cleanser.png", "/products/serum.png", "/products/cream.png", "/products/medicine-box.png"]

export const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "سكين 1004 سنتيلا زيت تنظيف خفيف 200 مل",
  sku: `2333DF`,
  category: i % 4 === 3 ? "medicine" : "skin",
  type: productTypes[i % productTypes.length],
  brand: brands[i % brands.length],
  price: 500,
  oldPrice: 750,
  rating: 4.8,
  tag: i % 4 === 3 ? "دواء" : "غسول",
  image: img[i % img.length],
  desc: "كريم مرطب ومغذي عميق للبشرة الحساسة والجافة جدا - 200 مل",
}))

export const featuredProducts = products.slice(0, 4)
export const offerProducts = products.slice(4, 8)

export const orders = [
  {
    id: "ABC-6457325",
    date: "10 مايو 2021",
    status: "pending",
    statusLabel: "قيد الانتظار",
    product: products[0],
  },
  {
    id: "ABC-6457326",
    date: "10 مايو 2021",
    status: "pending",
    statusLabel: "قيد الانتظار",
    product: products[1],
  },
  {
    id: "ABC-6457327",
    date: "10 مايو 2021",
    status: "delivered",
    statusLabel: "تم التسليم",
    product: products[2],
  },
]

export const stats = [
  { value: "1000+", label: "منتج متوفر" },
  { value: "1000+", label: "عميل موثوق" },
  { value: "24/7", label: "دعم العملاء" },
  { value: "95%", label: "رضا العملاء" },
]
