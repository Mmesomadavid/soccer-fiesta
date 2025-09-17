"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { User, Menu, X, ChevronRight } from "lucide-react"
import Logo from "./logo"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white">
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <Logo />

        {/* Desktop: Register button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/register"
            className="flex items-center gap-2 text-sm text-black hover:text-gray-700"
          >
            <User className="w-4 h-4" />
            Register Event
            <ChevronRight className="w-8 h-8 bg-zinc-100 text-gray-500 rounded-full p-2 hover:bg-zinc-200 hover:text-black transition" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden bg-zinc-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <Menu className="w-5 h-5 text-black" />
          )}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="p-4">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 text-black text-sm py-2 hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              Register Event
              <ChevronRight className="w-6 h-6 bg-zinc-100 text-gray-500 rounded-full p-1 hover:bg-zinc-200 hover:text-black transition" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
