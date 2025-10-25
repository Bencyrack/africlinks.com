'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    { icon: Facebook, href: SITE_CONFIG.links.facebook, label: 'Facebook' },
    { icon: Twitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
    { icon: Linkedin, href: SITE_CONFIG.links.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: SITE_CONFIG.links.instagram, label: 'Instagram' },
    { icon: Youtube, href: SITE_CONFIG.links.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center space-x-3 mb-4">
              <Image
                src="/afric-links-logo.png"
                alt="Afric Links Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t('description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Sicap liberté 3, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+22178 475 00 00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@africlinks.com" className="hover:text-yellow-500 transition-colors">
                  contact@africlinks.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {NAVIGATION.footer.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{t(`links.${section.title.toLowerCase()}`)}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t('newsletter.title')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('newsletter.description')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">{t('social')}</span>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
