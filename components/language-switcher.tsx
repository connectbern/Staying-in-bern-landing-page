"use client"

import { Globe, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useEffect, useState, useRef } from "react"

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle click outside to close menu
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Reset focused index when menu opens
  useEffect(() => {
    if (isOpen) {
      // Set focus to current language
      const currentIndex = languages.findIndex(lang => lang.code === i18n.language)
      setFocusedIndex(currentIndex >= 0 ? currentIndex : 0)
    } else {
      setFocusedIndex(-1)
    }
  }, [isOpen, i18n.language])

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
    // Return focus to button after selection
    buttonRef.current?.focus()
  }

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault()
        setIsOpen(true)
        break
      case 'ArrowUp':
        e.preventDefault()
        setIsOpen(true)
        break
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        break
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % languages.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + languages.length) % languages.length)
        break
      case 'Home':
        e.preventDefault()
        setFocusedIndex(0)
        break
      case 'End':
        e.preventDefault()
        setFocusedIndex(languages.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < languages.length) {
          handleLanguageChange(languages[focusedIndex].code)
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        buttonRef.current?.focus()
        break
      case 'Tab':
        // Close menu on Tab to prevent focus trap issues
        setIsOpen(false)
        break
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200">
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">English</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200 hover:bg-white/20 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label={`Select language. Current language: ${currentLanguage.label}`}
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{currentLanguage.label}</span>
        <ChevronDown className={`h-3 w-3 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={menuRef}
            id="language-menu"
            role="menu"
            aria-label="Language options"
            aria-activedescendant={focusedIndex >= 0 ? `lang-option-${languages[focusedIndex].code}` : undefined}
            onKeyDown={handleMenuKeyDown}
            tabIndex={-1}
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-20 focus:outline-none"
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                id={`lang-option-${lang.code}`}
                role="menuitem"
                onClick={() => handleLanguageChange(lang.code)}
                onMouseEnter={() => setFocusedIndex(index)}
                tabIndex={-1}
                aria-current={i18n.language === lang.code ? 'true' : undefined}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  focusedIndex === index ? 'bg-gray-100' : ''
                } ${
                  i18n.language === lang.code ? "bg-gray-50 font-medium text-primary" : "text-gray-700"
                }`}
              >
                {lang.label}
                {i18n.language === lang.code && (
                  <span className="sr-only"> (current)</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
