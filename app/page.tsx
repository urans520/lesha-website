import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProductsSection } from "@/components/sections/products"
import { BrandSection } from "@/components/sections/brand"
import { NewsSection } from "@/components/sections/news"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BrandSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
