"use client"

import { MapPin, Coffee, Mountain, Camera } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export function LocationSection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8723.JPG-DRfxIjM7BkSL7ELgSCno0qmvz8Kc02.jpeg"
          alt="Beautiful street view of Bern with colorful buildings"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t("location.title")}</h2>
            <p className="text-xl sm:text-2xl opacity-90 text-pretty">
              {t("location.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Coffee className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t("location.features.socialEvents.title")}</h3>
              <p className="opacity-80">
                {t("location.features.socialEvents.description")}
              </p>
            </div>

            <div className="text-center">
              <Mountain className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t("location.features.alpineAdventures.title")}</h3>
              <p className="opacity-80">{t("location.features.alpineAdventures.description")}</p>
            </div>

            <div className="text-center">
              <Camera className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t("location.features.richCulture.title")}</h3>
              <p className="opacity-80">{t("location.features.richCulture.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
