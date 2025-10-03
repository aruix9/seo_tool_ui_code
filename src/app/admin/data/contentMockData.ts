export interface ContentPage {
  id: string
  title: string
  slug: string
  type: 'page' | 'blog' | 'landing' | 'legal' | 'help'
  status: 'published' | 'draft' | 'archived' | 'scheduled'
  content: string
  excerpt: string
  featuredImage?: string
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage?: string
  }
  author: {
    id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
  publishedAt?: string
  scheduledAt?: string
  views: number
  isVisible: boolean
  parentId?: string
  order: number
}

export interface MediaFile {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  alt: string
  caption?: string
  uploadedBy: {
    id: string
    name: string
  }
  uploadedAt: string
  usageCount: number
  folder?: string
}

export interface ContentTemplate {
  id: string
  name: string
  description: string
  type: 'page' | 'blog' | 'landing'
  thumbnail: string
  content: string
  isActive: boolean
  usageCount: number
}

export interface SEOAnalysis {
  pageId: string
  score: number
  issues: {
    type: 'error' | 'warning' | 'info'
    message: string
    priority: 'high' | 'medium' | 'low'
  }[]
  suggestions: string[]
  lastAnalyzed: string
}

export interface ContentCategory {
  id: string
  name: string
  slug: string
  description: string
  parentId?: string
  pageCount: number
  isVisible: boolean
  order: number
}

// Content Pages Data
export const contentPages: ContentPage[] = [
  {
    id: '1',
    title: 'Homepage',
    slug: 'home',
    type: 'page',
    status: 'published',
    content: '<h1>Welcome to ButterSwipe</h1><p>Your premier SEO and backlink marketplace...</p>',
    excerpt: 'Welcome to ButterSwipe - Your premier SEO and backlink marketplace',
    featuredImage: '/images/homepage-hero.jpg',
    seo: {
      metaTitle: 'ButterSwipe - Premium SEO & Backlink Marketplace',
      metaDescription: 'Boost your website rankings with high-quality backlinks from trusted domains. Professional SEO services and link building solutions.',
      keywords: ['SEO', 'backlinks', 'link building', 'digital marketing', 'website ranking'],
      ogImage: '/images/og-homepage.jpg'
    },
    author: {
      id: '1',
      name: 'Admin User',
      email: 'admin@butterswipe.com'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-12-01T14:30:00Z',
    publishedAt: '2024-01-15T10:00:00Z',
    views: 15420,
    isVisible: true,
    order: 1
  },
  {
    id: '2',
    title: 'About Us',
    slug: 'about',
    type: 'page',
    status: 'published',
    content: '<h1>About ButterSwipe</h1><p>Founded in 2024, ButterSwipe has become the leading platform...</p>',
    excerpt: 'Learn about ButterSwipe mission and how we help businesses grow online',
    featuredImage: '/images/about-hero.jpg',
    seo: {
      metaTitle: 'About ButterSwipe - Leading SEO & Backlink Platform',
      metaDescription: 'Discover the story behind ButterSwipe and our mission to help businesses achieve online success through quality backlinks.',
      keywords: ['about butterswipe', 'company story', 'SEO platform', 'team'],
      ogImage: '/images/og-about.jpg'
    },
    author: {
      id: '1',
      name: 'Admin User',
      email: 'admin@butterswipe.com'
    },
    createdAt: '2024-01-20T09:15:00Z',
    updatedAt: '2024-11-15T16:45:00Z',
    publishedAt: '2024-01-20T09:15:00Z',
    views: 3240,
    isVisible: true,
    order: 2
  },
  {
    id: '3',
    title: 'How Link Building Transforms Your SEO Strategy',
    slug: 'link-building-transforms-seo-strategy',
    type: 'blog',
    status: 'published',
    content: '<h1>How Link Building Transforms Your SEO Strategy</h1><p>Link building remains one of the most powerful...</p>',
    excerpt: 'Discover how strategic link building can dramatically improve your search engine rankings and organic traffic.',
    featuredImage: '/images/blog-link-building.jpg',
    seo: {
      metaTitle: 'How Link Building Transforms Your SEO Strategy | ButterSwipe Blog',
      metaDescription: 'Learn advanced link building strategies that can transform your SEO results. Expert tips for building high-quality backlinks.',
      keywords: ['link building', 'SEO strategy', 'backlinks', 'search ranking', 'organic traffic'],
      ogImage: '/images/og-blog-link-building.jpg'
    },
    author: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@butterswipe.com'
    },
    createdAt: '2024-11-20T08:30:00Z',
    updatedAt: '2024-11-25T12:15:00Z',
    publishedAt: '2024-11-25T08:00:00Z',
    views: 1850,
    isVisible: true,
    order: 3
  },
  {
    id: '4',
    title: 'Black Friday SEO Sale Landing Page',
    slug: 'black-friday-seo-sale',
    type: 'landing',
    status: 'scheduled',
    content: '<h1>Black Friday SEO Sale</h1><p>Get 50% off on all premium backlink packages...</p>',
    excerpt: 'Limited time Black Friday offer - 50% off all SEO services',
    featuredImage: '/images/black-friday-landing.jpg',
    seo: {
      metaTitle: 'Black Friday SEO Sale - 50% Off Premium Backlinks | ButterSwipe',
      metaDescription: 'Dont miss our biggest sale of the year! Get 50% off all premium backlink packages. Limited time offer.',
      keywords: ['black friday', 'SEO sale', 'backlink discount', 'limited offer'],
      ogImage: '/images/og-black-friday.jpg'
    },
    author: {
      id: '3',
      name: 'Marketing Team',
      email: 'marketing@butterswipe.com'
    },
    createdAt: '2024-11-15T10:00:00Z',
    updatedAt: '2024-11-28T09:30:00Z',
    scheduledAt: '2024-11-29T00:00:00Z',
    views: 0,
    isVisible: false,
    order: 4
  },
  {
    id: '5',
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    type: 'legal',
    status: 'published',
    content: '<h1>Privacy Policy</h1><p>Last updated: November 2024</p><p>This Privacy Policy describes...</p>',
    excerpt: 'Our commitment to protecting your privacy and personal information',
    seo: {
      metaTitle: 'Privacy Policy | ButterSwipe',
      metaDescription: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
      keywords: ['privacy policy', 'data protection', 'personal information'],
    },
    author: {
      id: '4',
      name: 'Legal Team',
      email: 'legal@butterswipe.com'
    },
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-11-01T10:00:00Z',
    publishedAt: '2024-01-15T11:00:00Z',
    views: 890,
    isVisible: true,
    order: 5
  },
  {
    id: '6',
    title: 'Getting Started with SEO',
    slug: 'getting-started-with-seo',
    type: 'help',
    status: 'draft',
    content: '<h1>Getting Started with SEO</h1><p>New to SEO? This comprehensive guide will help you...</p>',
    excerpt: 'A comprehensive guide for beginners to start their SEO journey',
    seo: {
      metaTitle: 'Getting Started with SEO - Beginner Guide | ButterSwipe',
      metaDescription: 'Complete SEO guide for beginners. Learn the fundamentals of search engine optimization.',
      keywords: ['SEO guide', 'beginner SEO', 'search optimization', 'SEO basics'],
    },
    author: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@butterswipe.com'
    },
    createdAt: '2024-12-01T14:20:00Z',
    updatedAt: '2024-12-05T16:45:00Z',
    views: 0,
    isVisible: false,
    order: 6
  }
]

// Media Files Data
export const mediaFiles: MediaFile[] = [
  {
    id: '1',
    filename: 'homepage-hero-2024.jpg',
    originalName: 'homepage-hero.jpg',
    mimeType: 'image/jpeg',
    size: 245760,
    url: '/uploads/homepage-hero-2024.jpg',
    alt: 'ButterSwipe homepage hero image',
    caption: 'Professional SEO services hero banner',
    uploadedBy: {
      id: '1',
      name: 'Admin User'
    },
    uploadedAt: '2024-12-01T09:30:00Z',
    usageCount: 3,
    folder: 'pages'
  },
  {
    id: '2',
    filename: 'blog-link-building-guide.png',
    originalName: 'link-building-guide.png',
    mimeType: 'image/png',
    size: 189440,
    url: '/uploads/blog-link-building-guide.png',
    alt: 'Link building strategy infographic',
    caption: 'Comprehensive link building strategy visualization',
    uploadedBy: {
      id: '2',
      name: 'Sarah Johnson'
    },
    uploadedAt: '2024-11-20T14:15:00Z',
    usageCount: 1,
    folder: 'blog'
  },
  {
    id: '3',
    filename: 'seo-tools-comparison.pdf',
    originalName: 'seo-tools-comparison.pdf',
    mimeType: 'application/pdf',
    size: 1024000,
    url: '/uploads/seo-tools-comparison.pdf',
    alt: 'SEO tools comparison document',
    uploadedBy: {
      id: '2',
      name: 'Sarah Johnson'
    },
    uploadedAt: '2024-11-18T11:20:00Z',
    usageCount: 5,
    folder: 'resources'
  },
  {
    id: '4',
    filename: 'team-photo-2024.jpg',
    originalName: 'team-photo.jpg',
    mimeType: 'image/jpeg',
    size: 567890,
    url: '/uploads/team-photo-2024.jpg',
    alt: 'ButterSwipe team photo',
    caption: 'Our amazing team at ButterSwipe headquarters',
    uploadedBy: {
      id: '1',
      name: 'Admin User'
    },
    uploadedAt: '2024-10-15T13:45:00Z',
    usageCount: 2,
    folder: 'about'
  },
  {
    id: '5',
    filename: 'black-friday-banner.gif',
    originalName: 'black-friday-animated.gif',
    mimeType: 'image/gif',
    size: 890123,
    url: '/uploads/black-friday-banner.gif',
    alt: 'Black Friday sale animated banner',
    caption: 'Animated banner for Black Friday promotion',
    uploadedBy: {
      id: '3',
      name: 'Marketing Team'
    },
    uploadedAt: '2024-11-15T16:30:00Z',
    usageCount: 1,
    folder: 'marketing'
  }
]

// Content Templates
export const contentTemplates: ContentTemplate[] = [
  {
    id: '1',
    name: 'Basic Page Template',
    description: 'Standard page layout with header, content area, and call-to-action',
    type: 'page',
    thumbnail: '/templates/basic-page.jpg',
    content: '<div class="page-container"><header><h1>{{title}}</h1></header><main>{{content}}</main><section class="cta">{{call_to_action}}</section></div>',
    isActive: true,
    usageCount: 45
  },
  {
    id: '2',
    name: 'Blog Post Template',
    description: 'Blog post layout with featured image, author info, and social sharing',
    type: 'blog',
    thumbnail: '/templates/blog-post.jpg',
    content: '<article class="blog-post"><header><img src="{{featured_image}}" alt="{{title}}"><h1>{{title}}</h1><div class="meta">{{author}} • {{date}}</div></header><div class="content">{{content}}</div><footer class="social-share">{{social_buttons}}</footer></article>',
    isActive: true,
    usageCount: 28
  },
  {
    id: '3',
    name: 'Landing Page Template',
    description: 'High-converting landing page with hero section and lead capture',
    type: 'landing',
    thumbnail: '/templates/landing-page.jpg',
    content: '<div class="landing-page"><section class="hero">{{hero_content}}</section><section class="features">{{features}}</section><section class="testimonials">{{testimonials}}</section><section class="cta">{{lead_form}}</section></div>',
    isActive: true,
    usageCount: 12
  }
]

// SEO Analysis Data
export const seoAnalyses: SEOAnalysis[] = [
  {
    pageId: '1',
    score: 85,
    issues: [
      {
        type: 'warning',
        message: 'Meta description is slightly long (165 characters)',
        priority: 'medium'
      },
      {
        type: 'info',
        message: 'Consider adding more internal links',
        priority: 'low'
      }
    ],
    suggestions: [
      'Add schema markup for better search visibility',
      'Optimize images with better alt text',
      'Consider adding FAQ section for featured snippets'
    ],
    lastAnalyzed: '2024-12-05T10:30:00Z'
  },
  {
    pageId: '3',
    score: 92,
    issues: [
      {
        type: 'info',
        message: 'Great job! This page is well optimized',
        priority: 'low'
      }
    ],
    suggestions: [
      'Consider adding video content for better engagement',
      'Update content regularly to maintain freshness'
    ],
    lastAnalyzed: '2024-12-05T11:15:00Z'
  }
]

// Content Categories
export const contentCategories: ContentCategory[] = [
  {
    id: '1',
    name: 'SEO Guides',
    slug: 'seo-guides',
    description: 'Comprehensive guides about search engine optimization',
    pageCount: 12,
    isVisible: true,
    order: 1
  },
  {
    id: '2',
    name: 'Link Building',
    slug: 'link-building',
    description: 'Everything about building high-quality backlinks',
    pageCount: 8,
    isVisible: true,
    order: 2
  },
  {
    id: '3',
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'Real success stories from our clients',
    pageCount: 6,
    isVisible: true,
    order: 3
  },
  {
    id: '4',
    name: 'Industry News',
    slug: 'industry-news',
    description: 'Latest updates in SEO and digital marketing',
    pageCount: 15,
    isVisible: true,
    order: 4
  },
  {
    id: '5',
    name: 'Tools & Resources',
    slug: 'tools-resources',
    description: 'Helpful tools and resources for SEO professionals',
    pageCount: 9,
    isVisible: true,
    order: 5
  }
]

// Content Statistics
export const contentStats = {
  totalPages: 142,
  publishedPages: 128,
  draftPages: 14,
  scheduledPages: 3,
  totalViews: 245680,
  avgViewsPerPage: 1920,
  topPerformingPage: 'Homepage',
  recentlyUpdated: 8,
  seoScore: 87.5,
  mediaFiles: 234,
  mediaStorage: '2.4 GB'
}