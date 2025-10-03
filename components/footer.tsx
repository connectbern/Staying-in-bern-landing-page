"use client"

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Heart } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer id="contact" className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SB</span>
              </div>
              <span className="font-bold text-xl">Staying in Bern</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/stayinginbern/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("footer.socialLabels.instagram")}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Staying-in-Bern/61579405777769/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("footer.socialLabels.facebook")}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.meetup.com/meetup-bern/events/jvqxstyhcnbdc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("footer.socialLabels.meetup")}
              >
                <span className="text-white font-bold text-lg italic transform -skew-x-12">M</span>
              </a>
              <a
                href="https://www.linkedin.com/company/connect-bern-staying-in-bern/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("footer.socialLabels.linkedin")}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Contact Info */}
          <div className="lg:col-span-2 lg:pl-8">
            <h4 className="font-semibold text-lg mb-4">{t("footer.getInTouch")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">hello@stayinginbern.ch</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">+41 31 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Bern, Switzerland</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Staying in Bern. {t("footer.madeWith")} <Heart className="w-4 h-4 text-rose-500 inline mx-1" /> {t("footer.inSwitzerland")}.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                {t("footer.links.privacyPolicy")}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                {t("footer.links.termsOfService")}
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                {t("footer.links.cookiePolicy")}
              </a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Developed by{" "}
              <a
                href="https://github.com/deepnclear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                deepnclear
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
