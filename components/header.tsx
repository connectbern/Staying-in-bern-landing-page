"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

interface HeaderProps {
  showNavigation?: boolean
}

export function Header({ showNavigation = true }: HeaderProps) {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return

    const menuElement = mobileMenuRef.current
    const focusableElements = menuElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element when menu opens
    firstElement?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes menu
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      // Tab key trap
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab: if on first element, go to last
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab: if on last element, go to first
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  // Return focus to menu button when menu closes
  useEffect(() => {
    if (!isMenuOpen && menuButtonRef.current) {
      // Small delay to ensure animations complete
      const timer = setTimeout(() => {
        menuButtonRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

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
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SB</span>
            </div>
            <span className="font-bold text-lg text-foreground">Staying in Bern</span>
          </Link>

          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#mission"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-3 py-2"
                >
                  {t("header.nav.mission")}
                </a>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-3 py-2"
                >
                  {t("header.nav.benefits")}
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-3 py-2"
                >
                  {t("header.nav.stories")}
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-3 py-2"
                >
                  {t("header.nav.contact")}
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                className="md:hidden p-2 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("header.closeMenu", "Close menu") : t("header.toggleMenu")}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
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
              aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t("header.navigationMenu", "Navigation menu")}
              className={`md:hidden absolute left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
              style={{ top: "100%" }}
            >
              <nav className="flex flex-col py-4 px-4 space-y-4" aria-label={t("header.mobileNavigation", "Mobile navigation")}>
                <a
                  href="#mission"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-muted"
                  onClick={handleMenuItemClick}
                >
                  {t("header.nav.mission")}
                </a>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-muted"
                  onClick={handleMenuItemClick}
                >
                  {t("header.nav.benefits")}
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-muted"
                  onClick={handleMenuItemClick}
                >
                  {t("header.nav.stories")}
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-muted"
                  onClick={handleMenuItemClick}
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
