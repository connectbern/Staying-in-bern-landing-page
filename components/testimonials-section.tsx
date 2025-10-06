"use client"

import { Star, Quote, Users, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      image: "/professional-woman-smiling-warmly.jpg",
      rating: 5,
    },
    {
      image: "/friendly-swiss-man-with-warm-smile.jpg",
      rating: 5,
    },
    {
      image: "/young-woman-with-bright-smile-and-kind-eyes.jpg",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />

              {/* Rating - Dynamically render star icons based on testimonial rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t(`testimonials.items.${index}.content`)}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={t(`testimonials.items.${index}.name`)}
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t(`testimonials.items.${index}.name`)}</h4>
                  <p className="text-sm text-muted-foreground">{t(`testimonials.items.${index}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">{t("testimonials.cta")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="https://form.typeform.com/to/eKoZvDsW" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                {t("common.joinAsLocal")}
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
                {t("common.joinAsVolunteer")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
