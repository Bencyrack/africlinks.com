import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* À propos */}
          <div className="lg:col-span-1">
            <Link href="/fr" className="inline-block mb-3">
              <Image
                src="/afric-links-logo.png"
                alt="Afric Links Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-150 contrast-125"
                style={{ filter: 'brightness(1.5) contrast(1.25)' }}
              />
            </Link>
            <p className="text-sm text-gray-200 leading-relaxed mb-3 font-medium">
              Forum sur la Diplomatie Économique Interafricaine.
            </p>
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens Rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                <Link href="/" className="text-gray-100 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block font-bold">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                <Link href="/about" className="text-gray-100 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block font-bold">
                  À propos
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                <Link href="/missions" className="text-gray-100 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block font-bold">
                  Nos Missions
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                <Link href="/projects" className="text-gray-100 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block font-bold">
                  Projets
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                <Link href="/partners" className="text-gray-100 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block font-bold">
                  Partenaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              Contactez-nous
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-yellow-400 mb-1">Adresse</p>
                  <p className="text-white leading-relaxed font-semibold">Sicap Liberté 3, Dakar, Sénégal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-5 w-5 text-blue-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-yellow-400 mb-1">Téléphone</p>
                  <a href="tel:+221784750000" className="text-white hover:text-yellow-400 transition-colors font-semibold">
                    +221 78 475 00 00
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-yellow-600/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-yellow-600 transition-colors">
                  <Mail className="h-5 w-5 text-yellow-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-yellow-400 mb-1">Email</p>
                  <a href="mailto:contact@africlinks.org" className="text-white hover:text-yellow-400 transition-colors break-all font-semibold">
                    contact@africlinks.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 - Newsletter (optionnel) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              Suivez-nous
            </h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} <span className="text-white font-semibold">Afric Links</span>. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/fr/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Politique de confidentialité
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/fr/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
