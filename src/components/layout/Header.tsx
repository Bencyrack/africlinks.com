'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/missions', label: 'Missions' },
    { href: '/projects', label: 'Projets' },
    { href: '/partners', label: 'Partenaires' },
    { href: '/contact', label: 'Contact' },
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
   
  ];

  const currentLanguage = languages[0]; // Par défaut français

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Afric Links
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-6 py-2 mx-2 text-base font-medium transition-all duration-300
                    ${
                      isActive
                        ? 'text-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }
                    group
                  `}
                >
                  {item.label}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-purple-600 to-yellow-500 transition-all duration-300
                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                aria-label="Select language"
              >
                <Globe className="h-5 w-5" />
                <span>{currentLanguage.flag}</span>
                <span className="hidden lg:inline">{currentLanguage.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setIsLanguageOpen(false);
                          // Logique de changement de langue ici
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-purple-50 transition-colors"
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <span className="font-medium text-gray-700">{language.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-1">
                {navigationLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        block px-4 py-3 text-base font-medium rounded-lg transition-colors
                        ${
                          isActive
                            ? 'bg-purple-50 text-purple-600'
                            : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-gray-200 md:hidden">
                <p className="px-4 text-sm font-semibold text-gray-500 mb-2">Langue</p>
                <div className="space-y-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setIsMenuOpen(false);
                        // Logique de changement de langue ici
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-base hover:bg-purple-50 transition-colors rounded-lg"
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium text-gray-700">{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for dropdowns */}
      {(isLanguageOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:bg-transparent"
          onClick={() => {
            setIsLanguageOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}
