"use client"

import { Target, Heart, Users, Globe, Star } from "lucide-react"
import { useTranslation } from "react-i18next"

export function MissionSection() {
  const { t } = useTranslation()

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission Column */}
          <div className="space-y-8">
            <div className="pt-0">
              <div className="flex items-center mb-4 mt-0">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("mission.title")}</h2>
              </div>
            </div>

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("mission.description")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("mission.features.authenticConnections.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("mission.features.authenticConnections.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("mission.features.communityIntegration.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("mission.features.communityIntegration.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("mission.features.culturalExchange.title")}</h3>
                  <p className="text-muted-foreground">{t("mission.features.culturalExchange.description")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Column */}
          <div className="space-y-8">
            <div className="pt-0">
              <div className="flex items-center mb-4 mt-0">
                <Star className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("mission.values.title")}</h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("mission.values.humanConnectionFirst.title")}</h3>
                <p className="text-muted-foreground text-sm">
                  {t("mission.values.humanConnectionFirst.description")}
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("mission.values.inclusivity.title")}</h3>
                <p className="text-muted-foreground text-sm">
                  {t("mission.values.inclusivity.description")}
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("mission.values.respect.title")}</h3>
                <p className="text-muted-foreground text-sm">
                  {t("mission.values.respect.description")}
                </p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("mission.values.simplicity.title")}</h3>
                <p className="text-muted-foreground text-sm">
                  {t("mission.values.simplicity.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
