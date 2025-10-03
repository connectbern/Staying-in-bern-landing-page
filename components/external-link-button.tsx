"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"

interface ExternalLinkButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  loadingMessage?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function ExternalLinkButton({
  href,
  children,
  className = "",
  icon,
  loadingMessage = "Opening form...",
  size = "default"
}: ExternalLinkButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsLoading(true)
    // Reset loading state after a short delay (in case user closes the new window)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <Button
      size={size}
      className={className}
      asChild
      disabled={isLoading}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {loadingMessage}
          </>
        ) : (
          <>
            {icon}
            {children}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </a>
    </Button>
  )
}
