"use client"

import { Users, Globe, Heart } from "lucide-react"
import Image from "next/image"
import { ExternalLinkButton } from "@/components/external-link-button"
import { useTranslation } from "react-i18next"

export function BenefitsSection() {
  const { t } = useTranslation()
  return (
    <section id="benefits" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{t("benefits.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("benefits.subtitle")}
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
                <h3 className="text-2xl font-bold text-foreground">{t("benefits.forLocals.title")}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("benefits.forLocals.description")}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• {t("benefits.forLocals.benefits.0")}</li>
                <li>• {t("benefits.forLocals.benefits.1")}</li>
                <li>• {t("benefits.forLocals.benefits.2")}</li>
                <li>• {t("benefits.forLocals.benefits.3")}</li>
              </ul>
              <ExternalLinkButton
                href="https://form.typeform.com/to/eKoZvDsW"
                className="w-full group-hover:bg-primary-hover transition-colors"
              >
                {t("common.joinAsLocal")}
              </ExternalLinkButton>
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
                <h3 className="text-2xl font-bold text-foreground">{t("benefits.forVolunteers.title")}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("benefits.forVolunteers.description")}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• {t("benefits.forVolunteers.benefits.0")}</li>
                <li>• {t("benefits.forVolunteers.benefits.1")}</li>
                <li>• {t("benefits.forVolunteers.benefits.2")}</li>
                <li>• {t("benefits.forVolunteers.benefits.3")}</li>
              </ul>
              <ExternalLinkButton
                href="https://form.typeform.com/to/j4aRQLtS"
                className="w-full bg-amber-700 text-white hover:bg-amber-800 transition-colors"
              >
                {t("common.joinAsVolunteer")}
              </ExternalLinkButton>
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
                <h3 className="text-2xl font-bold text-foreground">{t("benefits.forUnderrepresented.title")}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("benefits.forUnderrepresented.description")}
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• {t("benefits.forUnderrepresented.benefits.0")}</li>
                <li>• {t("benefits.forUnderrepresented.benefits.1")}</li>
                <li>• {t("benefits.forUnderrepresented.benefits.2")}</li>
                <li>• {t("benefits.forUnderrepresented.benefits.3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
