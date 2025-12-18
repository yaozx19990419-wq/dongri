import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CharactersSection } from "@/components/characters-section"
import { ScreenshotsPreview } from "@/components/screenshots-preview"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CharactersSection />
        <ScreenshotsPreview />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
