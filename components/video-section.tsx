"use client"

import { useTranslation } from "react-i18next"

export function VideoSection() {
  const { t } = useTranslation()

  return (
    <section className="pt-12 pb-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t("video.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("video.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yQIfVFEjHeg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
