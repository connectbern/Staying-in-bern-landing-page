import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { MissionSection } from "@/components/mission-section"
import { LocationSection } from "@/components/location-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <MissionSection />
      <LocationSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
