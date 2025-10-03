"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Header showNavigation={false} />
      <main className="min-h-screen bg-background pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-9xl font-bold text-primary/20 mb-4 select-none">404</div>
              <MapPin className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
            </div>

            {/* Error Message */}
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Oops! You've wandered off the path
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              It looks like the page you're looking for doesn't exist. Maybe it moved to a new location in Bern,
              or perhaps it never existed at all.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Explore our platform</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link
                  href="/#mission"
                  className="p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about connecting locals and volunteers in Bern
                  </p>
                </Link>
                <Link
                  href="/#benefits"
                  className="p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Join Us
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover the benefits of joining our community
                  </p>
                </Link>
                <Link
                  href="/#testimonials"
                  className="p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Success Stories
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Read testimonials from our community members
                  </p>
                </Link>
                <Link
                  href="/#contact"
                  className="p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us for questions or support
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
