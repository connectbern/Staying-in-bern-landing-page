import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Globe } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pb-6 text-gray-900 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute top-8 left-8">
          <Image src="/logo.svg" alt="Staying in Bern Logo" width={192} height={96} className="h-20 w-auto" />
        </div>

        <div className="absolute top-8 right-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200">
            <Globe className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">English</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-24">
          {/* Main Headline */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Staying in Bern
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 opacity-90">Human Connection First</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 text-pretty max-w-3xl mx-auto">
              Build lasting friendships in Bern. Join a welcoming community where authentic connections happen
              naturally.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="https://form.typeform.com/to/eKoZvDsW" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Join as a Local
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="https://form.typeform.com/to/j4aRQLtS" target="_blank" rel="noopener noreferrer">
                <Heart className="mr-2 h-5 w-5" />
                Join as a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-80">Connections Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Events Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
