import { Star, Quote, Users, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Volunteer from Canada",
      image: "/professional-woman-smiling-warmly.jpg",
      content:
        "Staying in Bern transformed my experience in Switzerland. Through this community, I didn't just visit Bern - I truly lived it. The locals I met became lifelong friends who showed me hidden gems I never would have discovered on my own.",
      rating: 5,
    },
    {
      name: "Marcus Weber",
      role: "Local Bernese",
      image: "/friendly-swiss-man-with-warm-smile.jpg",
      content:
        "Hosting volunteers through this platform has been incredibly rewarding. I've learned so much about different cultures while sharing my love for Bern. It's amazing how these connections have enriched my own perspective of my hometown.",
      rating: 5,
    },
    {
      name: "Monica Rodriguez",
      role: "Volunteer from Ecuador",
      image: "/young-woman-with-bright-smile-and-kind-eyes.jpg",
      content:
        "Staying in Bern is an amazing first experience for me. To know people of the another countries and interchange the culture and the languages while stay in a beautifull city like Bern, is very interesting. In few days I learned a lot about the comunications skills, that are the keys for made the world in general one best place.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Stories from Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from locals and volunteers who have experienced the magic of authentic human connections in Bern.
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
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to create your own story?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  )
}
