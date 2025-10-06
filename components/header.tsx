"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

interface HeaderProps {
  showNavigation?: boolean
}

export function Header({ showNavigation = true }: HeaderProps) {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Skip to main content link - WCAG 2.4.1 Bypass Blocks */}
      <a href="#main-content" className="skip-to-content">
        {t("header.skipToContent")}
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SB</span>
            </div>
            <span className="font-bold text-lg text-foreground">Staying in Bern</span>
          </Link>

          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("header.nav.mission")}
                </a>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("header.nav.benefits")}
                </a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("header.nav.stories")}
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("header.nav.contact")}
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={t("header.toggleMenu")}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        {showNavigation && (
          <>
            {/* Backdrop Overlay */}
            <div
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsMenuOpen(false)}
              style={{ top: "64px" }}
            />

            {/* Mobile Menu */}
            <div
              className={`md:hidden absolute left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
              style={{ top: "100%" }}
            >
              <nav className="flex flex-col py-4 px-4 space-y-4">
                <a
                  href="#mission"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.nav.mission")}
                </a>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.nav.benefits")}
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.nav.stories")}
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.nav.contact")}
                </a>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
    </>
  )
}
