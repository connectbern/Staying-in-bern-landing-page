import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Heart } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">What's in it for You?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Whether you're a local wanting to share your city or a volunteer seeking authentic connections, our
            community offers something special for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* For Locals Card */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/locals_photo-G4xODIdVugkhbV64kmdgw7P0pk7DHN.jpg"
                alt="Local families and community members"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">For Locals</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Share your love for Bern while gaining fresh perspectives. Help travellers/volunteers feel at home and
                build meaningful friendships that enrich your own life.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Meet interesting people from around the world</li>
                <li>• Rediscover your city through new eyes</li>
                <li>• Build a diverse social network</li>
                <li>• Make a positive impact in your community</li>
              </ul>
              <Button className="w-full group-hover:bg-primary-hover transition-colors" asChild>
                <a href="https://form.typeform.com/to/eKoZvDsW" target="_blank" rel="noopener noreferrer">
                  Join as a Local
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* For Volunteers Card */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/volunteers_photo-DYgFVq1hKdK6VhlNXGjrBv8hRtmbm5.jpg"
                alt="Happy volunteers holding welcome sign"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-foreground">For Volunteers</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience authentic Swiss culture through genuine local connections. Skip the tourist traps and
                discover Bern like a true local.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Get insider knowledge of Bern</li>
                <li>• Experience authentic Swiss culture</li>
                <li>• Build lasting international friendships</li>
                <li>• Feel supported in your new environment</li>
              </ul>
              <Button className="w-full bg-amber-700 text-white hover:bg-amber-800 transition-colors" asChild>
                <a href="https://form.typeform.com/to/j4aRQLtS" target="_blank" rel="noopener noreferrer">
                  Join as a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* For Underrepresented Groups Card */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/images/underrepresented_communities.jpg"
                alt="Diverse group of underrepresented community members connecting and sharing experiences together"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-rose-500 mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Underrepresented Groups</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Families, LGBTQ+, people of colour, different faiths, all ages, who deserve spaces where they feel
                included and valued. Join a community where lasting connections flourish. Experience the joy of
                authentic relationships that go beyond cultural boundaries.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Participate in regular community events</li>
                <li>• Access to exclusive local experiences</li>
                <li>• Ongoing support and friendship network</li>
                <li>• Opportunities for personal growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
