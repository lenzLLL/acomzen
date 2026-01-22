"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
    { name: "PDG & Équipe", href: "/equipe" },
    { name: "Nos Prestations", href: "/prestations" },
    { name: "Disciplines", href: "/disciplines" },
    { name: "Technologie", href: "/technologie" },
    { name: "Actualités", href: "/actualites" },
    { name: "Partenaires", href: "/partenaires" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="https://ucarecdn.com/d2b158f4-f471-47b8-b812-2cdba72e0bc7/-/format/auto/"
              alt="ACOMZÉN Logo"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#B91C2E] hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/inscription"
              className="ml-4 px-6 py-2 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-lg"
            >
              S'inscrire
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-[#B91C2E] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/inscription"
                className="mx-3 px-6 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
