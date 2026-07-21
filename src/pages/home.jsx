import { HeroSection } from "@/components/home/HeroSection"
import { CategoriesSection } from "@/components/home/CategoriesSection"
import { FeaturedSection } from "@/components/home/FeaturedSection"
import { PromoBanners } from "@/components/home/PromoBanners"
import { OffersSection } from "@/components/home/OffersSection"
import { AboutSection } from "@/components/home/AboutSection"

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <HeroSection />
      {/* <CategoriesSection />
      <FeaturedSection />
      <PromoBanners />
      <OffersSection />
      <AboutSection /> */}
    </main>
  )
}