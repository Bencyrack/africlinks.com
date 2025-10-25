// Site configuration
export const SITE_CONFIG = {
  name: "Afric Links",
  title: "FORUM SUR LA DIPLOMATIE ÉCONOMIQUE INTER-AFRICAINE",
  description: "Promouvoir l'économie, la diversité culturelle, l'éducation, la coopération économique et les initiatives de la Francophonie à l'échelle Africaine.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/africlinks",
    linkedin: "https://linkedin.com/company/africlinks",
    facebook: "https://facebook.com/africlinks",
    instagram: "https://instagram.com/africlinks",
    youtube: "https://youtube.com/@africlinks",
  },
} as const

// Navigation items
export const NAVIGATION = {
  main: [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "À propos",
      href: "/about",
    },
    {
      title: "Missions",
      href: "/missions",
    },
    {
      title: "Projets",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footer: [
    {
      title: "Organisation",
      items: [
        { title: "À propos", href: "/about" },
        { title: "Missions", href: "/missions" },
        { title: "Équipe", href: "/team" },
        { title: "Gouvernance", href: "/governance" },
      ],
    },
    {
      title: "Programmes",
      items: [
        { title: "Éducation", href: "/programs/education" },
        { title: "Économie", href: "/programs/economy" },
        { title: "Culture", href: "/programs/culture" },
        { title: "Coopération", href: "/programs/cooperation" },
      ],
    },
    {
      title: "Contact",
      items: [
        { title: "Nous contacter", href: "/contact" },
        { title: "Presse", href: "/press" },
        { title: "Partenaires", href: "/partners" },
        { title: "Mentions légales", href: "/legal" },
      ],
    },
  ],
} as const

// Supported languages
export const LANGUAGES = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
] as const

// Theme colors based on the logo
export const THEME_COLORS = {
  primary: {
    blue: "#1E40AF",
    green: "#059669",
    red: "#DC2626",
    yellow: "#D97706",
    purple: "#7C3AED",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const
