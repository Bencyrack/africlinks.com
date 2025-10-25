// Common types for the application

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor' | 'user'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  author: User
  category: Category
  tags: Tag[]
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  locale: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
  locale: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  locale: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  content: string
  featuredImage?: string
  gallery: string[]
  status: 'planning' | 'active' | 'completed' | 'suspended'
  startDate: Date
  endDate?: Date
  budget?: number
  partners: Partner[]
  countries: Country[]
  categories: ProjectCategory[]
  locale: string
  createdAt: Date
  updatedAt: Date
}

export interface Partner {
  id: string
  name: string
  logo?: string
  website?: string
  description?: string
  type: 'government' | 'ngo' | 'private' | 'international'
}

export interface Country {
  id: string
  name: string
  code: string
  flag?: string
  region: string
}

export interface ProjectCategory {
  id: string
  name: string
  slug: string
  color?: string
  locale: string
}

export interface Document {
  id: string
  title: string
  description?: string
  filename: string
  fileUrl: string
  fileSize: number
  mimeType: string
  category: DocumentCategory
  tags: Tag[]
  downloadCount: number
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  locale: string
}

export interface DocumentCategory {
  id: string
  name: string
  slug: string
  description?: string
  locale: string
}

export interface MediaItem {
  id: string
  title: string
  description?: string
  type: 'image' | 'video' | 'audio'
  url: string
  thumbnailUrl?: string
  alt?: string
  caption?: string
  credits?: string
  tags: Tag[]
  gallery?: Gallery
  createdAt: Date
  updatedAt: Date
}

export interface Gallery {
  id: string
  title: string
  slug: string
  description?: string
  coverImage?: string
  items: MediaItem[]
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  locale: string
}

export interface Event {
  id: string
  title: string
  slug: string
  description: string
  content?: string
  startDate: Date
  endDate?: Date
  location?: string
  venue?: string
  featuredImage?: string
  gallery: string[]
  category: EventCategory
  tags: Tag[]
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  locale: string
}

export interface EventCategory {
  id: string
  name: string
  slug: string
  color?: string
  locale: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  organization?: string
  phone?: string
}

export interface NewsletterForm {
  email: string
  name?: string
  preferences?: string[]
}

// Search types
export interface SearchResult {
  id: string
  title: string
  excerpt: string
  type: 'article' | 'project' | 'document' | 'event'
  url: string
  score: number
  locale: string
}

export interface SearchFilters {
  type?: string[]
  category?: string[]
  tags?: string[]
  dateFrom?: Date
  dateTo?: Date
  locale?: string
}
