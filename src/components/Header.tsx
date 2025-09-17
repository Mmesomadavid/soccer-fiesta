"use client"

import { User, ChevronRight } from "lucide-react"
import Logo from "./logo"
import { Link } from "react-router-dom"

const Header = () => {

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

      </div>

     
    </header>
  )
}

export default Header
