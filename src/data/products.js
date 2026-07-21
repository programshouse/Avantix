export const categories = [
  {
    id: "skin",
    name: "العناية بالبشرة",
    img: "/images/categories/category (1).svg",
  },
  {
    id: "vitamins",
    name: "الفيتامينات",
    img: "/images/categories/category (2).svg",
  },
  {
    id: "medicine",
    name: "الأدوية",
    img: "/images/categories/category (3).svg",
  },
  {
    id: "cosmetics",
    name: "مستحضرات التجميل",
    img: "/images/categories/category (4).svg",
  },
  {
    id: "supplements",
    name: "المكملات الغذائية",
    img: "/images/categories/category (5).svg",
  },
  {
    id: "care",
    name: "العناية الشخصية",
    img: "/images/categories/category (6).svg",
  },
  {
    id: "baby",
    name: "منتجات الأطفال",
    img: "/images/categories/category (7).svg",
  },
  {
    id: "all",
    name: "عرض الكل",
    img: "/images/categories/category (1).svg", // or reuse another icon
  },
];

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

const img = ["/images/categories/category (1).svg", "/images/categories/category (2).svg", "/images/categories/category (3).svg", "/images/categories/category (4).svg"]

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
