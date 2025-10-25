'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';

const NAVIGATION = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/missions', label: 'Village B to B' },
  { href: '/partners', label: 'Panels' },
  { href: '/contact', label: 'Inscriptions' },
];

const LANGUAGES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
 
];

export default function SimpleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/fr" className="flex items-center space-x-3">
            <Image
              src="/afric-links-logo.png"
              alt="Afric Links Logo"
              width={200}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={`/fr${item.href === '/' ? '' : item.href}`}
                className="px-4 py-2 text-base font-bold text-gray-800 hover:text-purple-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Select language"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Français</span>
                <span className="sm:hidden">🇫🇷</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50">
                  {LANGUAGES.map((language) => (
                    <Link
                      key={language.code}
                      href={`/${language.code}`}
                      className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t py-4 space-y-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={`/fr${item.href === '/' ? '' : item.href}`}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Overlay for language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
}
