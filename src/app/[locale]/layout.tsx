import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import SimpleHeader from '@/components/layout/SimpleHeader';
import SimpleFooter from '@/components/layout/SimpleFooter';
import ClientLayout from '@/components/layout/ClientLayout';

const locales = ['fr', 'en', 'pt'];

// Métadonnées SEO
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadata = {
    fr: {
      title: 'Afric Links - Renforcer la Francophonie en Afrique',
      description: 'Organisation internationale promouvant la coopération économique, culturelle et éducative entre les pays francophones d’Afrique. Découvrez nos missions, projets et actualités.',
      keywords: 'Afric Links, Francophonie, Afrique, coopération, économie, culture, éducation, développement',
    },
    en: {
      title: 'Afric Links - Strengthening Francophonie in Africa',
      description: 'International organization promoting economic, cultural and educational cooperation between French-speaking African countries. Discover our missions, projects and news.',
      keywords: 'Afric Links, Francophonie, Africa, cooperation, economy, culture, education, development',
    },
    pt: {
      title: 'Afric Links - Fortalecer a Francofonia em África',
      description: 'Organização internacional que promove a cooperação econômica, cultural e educacional entre os países africanos de língua francesa. Descubra nossas missões, projetos e notícias.',
      keywords: 'Afric Links, Francofonia, África, cooperação, economia, cultura, educação, desenvolvimento',
    },
  };

  const meta = metadata[locale as keyof typeof metadata] || metadata.fr;

  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Afric Links' }],
    creator: 'Afric Links',
    publisher: 'Afric Links',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://africlinks.com'),
    alternates: {
      canonical: '/',
      languages: {
        'fr': '/fr',
        'en': '/en',
        'pt': '/pt',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://africlinks.com',
      title: meta.title,
      description: meta.description,
      siteName: 'Afric Links',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Afric Links - Francophonie en Afrique',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/og-image.jpg'],
      creator: '@africlinks',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'votre-code-google-search-console',
      // yandex: 'votre-code-yandex',
      // bing: 'votre-code-bing',
    },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <ClientLayout>
      <div className="min-h-screen flex flex-col">
        <SimpleHeader />
        <main className="flex-1">
          {children}
        </main>
        <SimpleFooter />
      </div>
    </ClientLayout>
  );
}
