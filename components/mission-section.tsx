import { Target, Heart, Users, Globe, Star } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission Column */}
          <div className="space-y-8">
            <div className="pt-0">
              <div className="flex items-center mb-4 mt-0">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
            </div>

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Staying in Bern is a communal home where connection comes first. Locals and volunteers meet to share
                meals, laughter, music, and everyday moments in a safe, inclusive space. Volunteers keep the house alive
                and welcoming, creating a family-like atmosphere where everyone: families, LGBTQ+, people of all
                backgrounds can feel at home and part of something shared.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Authentic Connections</h3>
                  <p className="text-muted-foreground">
                    Foster genuine relationships beyond surface-level interactions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Community Integration</h3>
                  <p className="text-muted-foreground">
                    Help travellers/volunteers feel at home while enriching local perspectives
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cultural Exchange</h3>
                  <p className="text-muted-foreground">Celebrate diversity and learn from different backgrounds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Column */}
          <div className="space-y-8">
            <div className="pt-0">
              <div className="flex items-center mb-4 mt-0">
                <Star className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">Human Connection First</h3>
                <p className="text-muted-foreground text-sm">
                  Meals, laughter, music, and conversation are at the heart of everything we do.
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">Inclusivity</h3>
                <p className="text-muted-foreground text-sm">
                  All ages, identities, cultures, and backgrounds are welcome.
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">Respect</h3>
                <p className="text-muted-foreground text-sm">
                  We share space with care, balancing individual needs and the community's well-being.
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">Simplicity</h3>
                <p className="text-muted-foreground text-sm">
                  No hidden agendas, no commercial push, just a space to meet, share, and belong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
