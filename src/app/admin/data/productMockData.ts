export interface Product {
  id: number
  name: string
  description: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive' | 'draft'
  createdAt: string
  updatedAt: string
  domain: string
  domainAuthority: number
  domainRating: number
  monthlyTraffic: number
  turnaroundTime: number
  features: string[]
  specifications: {
    linkType: 'dofollow' | 'nofollow'
    contentType: string
    wordCount: number
    language: string
    niches: string[]
  }
}

export const productMockData: Product[] = [
  {
    id: 1,
    name: "TechCrunch Guest Post",
    description: "High-authority guest post on TechCrunch with dofollow link. Perfect for tech startups and SaaS companies.",
    category: "Guest Posts",
    price: 2500,
    stock: 5,
    status: "active",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
    domain: "techcrunch.com",
    domainAuthority: 95,
    domainRating: 92,
    monthlyTraffic: 8500000,
    turnaroundTime: 7,
    features: ["Editorial review", "Social media promotion", "Newsletter inclusion"],
    specifications: {
      linkType: "dofollow",
      contentType: "Editorial article",
      wordCount: 1000,
      language: "English",
      niches: ["Technology", "Startups", "SaaS", "Innovation"]
    }
  },
  {
    id: 2,
    name: "Forbes Business Link Insertion",
    description: "Link insertion in existing Forbes business article. High-impact placement for established brands.",
    category: "Link Insertions",
    price: 1800,
    stock: 3,
    status: "active",
    createdAt: "2024-01-20",
    updatedAt: "2024-01-20",
    domain: "forbes.com",
    domainAuthority: 94,
    domainRating: 91,
    monthlyTraffic: 6200000,
    turnaroundTime: 3,
    features: ["Contextual placement", "Existing article traffic", "Brand association"],
    specifications: {
      linkType: "dofollow",
      contentType: "Business article",
      wordCount: 50,
      language: "English",
      niches: ["Business", "Finance", "Leadership", "Entrepreneurship"]
    }
  },
  {
    id: 3,
    name: "Entrepreneur Magazine Feature",
    description: "Sponsored content placement on Entrepreneur.com with multimedia support and social amplification.",
    category: "Sponsored",
    price: 3200,
    stock: 2,
    status: "active",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-01",
    domain: "entrepreneur.com",
    domainAuthority: 91,
    domainRating: 89,
    monthlyTraffic: 4500000,
    turnaroundTime: 10,
    features: ["Multimedia content", "Social amplification", "Newsletter feature"],
    specifications: {
      linkType: "dofollow",
      contentType: "Sponsored article",
      wordCount: 1200,
      language: "English",
      niches: ["Entrepreneurship", "Business", "Marketing", "Leadership"]
    }
  },
  {
    id: 4,
    name: "Inc.com Business Directory",
    description: "Premium business directory listing with enhanced profile and multiple link placements.",
    category: "Directory",
    price: 450,
    stock: 25,
    status: "active",
    createdAt: "2024-02-05",
    updatedAt: "2024-02-05",
    domain: "inc.com",
    domainAuthority: 89,
    domainRating: 87,
    monthlyTraffic: 3800000,
    turnaroundTime: 2,
    features: ["Enhanced profile", "Multiple links", "Image gallery"],
    specifications: {
      linkType: "dofollow",
      contentType: "Directory listing",
      wordCount: 200,
      language: "English",
      niches: ["Business", "Directory", "B2B", "Services"]
    }
  },
  {
    id: 5,
    name: "Mashable Tech Review",
    description: "Product review and feature article on Mashable with high engagement potential.",
    category: "Guest Posts",
    price: 2100,
    stock: 4,
    status: "active",
    createdAt: "2024-02-10",
    updatedAt: "2024-02-10",
    domain: "mashable.com",
    domainAuthority: 88,
    domainRating: 85,
    monthlyTraffic: 3200000,
    turnaroundTime: 5,
    features: ["Product review", "Video content", "Social sharing"],
    specifications: {
      linkType: "dofollow",
      contentType: "Review article",
      wordCount: 800,
      language: "English",
      niches: ["Technology", "Gadgets", "Apps", "Digital"]
    }
  },
  {
    id: 6,
    name: "PR Newswire Press Release",
    description: "Wide-reach press release distribution with guaranteed pickup by major news outlets.",
    category: "Press Release",
    price: 800,
    stock: 15,
    status: "active",
    createdAt: "2024-02-12",
    updatedAt: "2024-02-12",
    domain: "prnewswire.com",
    domainAuthority: 86,
    domainRating: 83,
    monthlyTraffic: 2100000,
    turnaroundTime: 1,
    features: ["Wide distribution", "News pickup", "SEO benefits"],
    specifications: {
      linkType: "dofollow",
      contentType: "Press release",
      wordCount: 600,
      language: "English",
      niches: ["News", "Business", "Technology", "General"]
    }
  },
  {
    id: 7,
    name: "Harvard Business Review Insight",
    description: "Premium thought leadership article in Harvard Business Review - exceptional authority.",
    category: "Guest Posts",
    price: 4500,
    stock: 1,
    status: "active",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-15",
    domain: "hbr.org",
    domainAuthority: 93,
    domainRating: 90,
    monthlyTraffic: 2800000,
    turnaroundTime: 14,
    features: ["Thought leadership", "C-suite audience", "Premium placement"],
    specifications: {
      linkType: "dofollow",
      contentType: "Insight article",
      wordCount: 1500,
      language: "English",
      niches: ["Business Strategy", "Leadership", "Management", "Finance"]
    }
  },
  {
    id: 8,
    name: "Wired Technology Feature",
    description: "In-depth technology feature article with editorial support and multimedia content.",
    category: "Guest Posts",
    price: 2800,
    stock: 3,
    status: "active",
    createdAt: "2024-02-18",
    updatedAt: "2024-02-18",
    domain: "wired.com",
    domainAuthority: 90,
    domainRating: 88,
    monthlyTraffic: 2500000,
    turnaroundTime: 8,
    features: ["Editorial support", "Multimedia", "Tech focus"],
    specifications: {
      linkType: "dofollow",
      contentType: "Feature article",
      wordCount: 1200,
      language: "English",
      niches: ["Technology", "Innovation", "Science", "Future"]
    }
  },
  {
    id: 9,
    name: "Fast Company Innovation Spotlight",
    description: "Innovation-focused content placement with emphasis on disruptive technologies and business models.",
    category: "Sponsored",
    price: 2200,
    stock: 6,
    status: "active",
    createdAt: "2024-02-20",
    updatedAt: "2024-02-20",
    domain: "fastcompany.com",
    domainAuthority: 87,
    domainRating: 84,
    monthlyTraffic: 1900000,
    turnaroundTime: 6,
    features: ["Innovation focus", "Business model analysis", "Trend coverage"],
    specifications: {
      linkType: "dofollow",
      contentType: "Innovation article",
      wordCount: 900,
      language: "English",
      niches: ["Innovation", "Business", "Technology", "Design"]
    }
  },
  {
    id: 10,
    name: "Business Insider Market Analysis",
    description: "Market analysis and industry insights with data-driven content and expert commentary.",
    category: "Link Insertions",
    price: 1600,
    stock: 8,
    status: "active",
    createdAt: "2024-02-22",
    updatedAt: "2024-02-22",
    domain: "businessinsider.com",
    domainAuthority: 89,
    domainRating: 86,
    monthlyTraffic: 4100000,
    turnaroundTime: 4,
    features: ["Market data", "Expert quotes", "Industry analysis"],
    specifications: {
      linkType: "dofollow",
      contentType: "Market analysis",
      wordCount: 100,
      language: "English",
      niches: ["Markets", "Finance", "Business", "Economy"]
    }
  },
  {
    id: 11,
    name: "Medium Technology Publication",
    description: "High-engagement technology publication on Medium with developer-focused audience.",
    category: "Guest Posts",
    price: 350,
    stock: 20,
    status: "active",
    createdAt: "2024-02-25",
    updatedAt: "2024-02-25",
    domain: "medium.com",
    domainAuthority: 85,
    domainRating: 82,
    monthlyTraffic: 5200000,
    turnaroundTime: 3,
    features: ["Developer audience", "High engagement", "Tech community"],
    specifications: {
      linkType: "dofollow",
      contentType: "Technical article",
      wordCount: 1000,
      language: "English",
      niches: ["Development", "Technology", "Programming", "DevOps"]
    }
  },
  {
    id: 12,
    name: "Reuters Business Wire",
    description: "Professional press release distribution through Reuters with international reach.",
    category: "Press Release",
    price: 1200,
    stock: 10,
    status: "active",
    createdAt: "2024-02-28",
    updatedAt: "2024-02-28",
    domain: "reuters.com",
    domainAuthority: 92,
    domainRating: 89,
    monthlyTraffic: 3600000,
    turnaroundTime: 2,
    features: ["International reach", "Credible source", "Wide syndication"],
    specifications: {
      linkType: "dofollow",
      contentType: "News release",
      wordCount: 500,
      language: "English",
      niches: ["News", "Business", "Finance", "International"]
    }
  },
  {
    id: 13,
    name: "VentureBeat Startup Coverage",
    description: "Startup-focused content with emphasis on funding, growth, and technology trends.",
    category: "Guest Posts",
    price: 1400,
    stock: 12,
    status: "draft",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    domain: "venturebeat.com",
    domainAuthority: 84,
    domainRating: 81,
    monthlyTraffic: 1800000,
    turnaroundTime: 5,
    features: ["Startup focus", "Funding coverage", "Tech trends"],
    specifications: {
      linkType: "dofollow",
      contentType: "Startup article",
      wordCount: 800,
      language: "English",
      niches: ["Startups", "Venture Capital", "Technology", "Growth"]
    }
  },
  {
    id: 14,
    name: "Yahoo Finance Business Directory",
    description: "Business directory listing on Yahoo Finance with financial industry focus.",
    category: "Directory",
    price: 280,
    stock: 30,
    status: "active",
    createdAt: "2024-03-03",
    updatedAt: "2024-03-03",
    domain: "finance.yahoo.com",
    domainAuthority: 88,
    domainRating: 85,
    monthlyTraffic: 7200000,
    turnaroundTime: 1,
    features: ["Financial focus", "High traffic", "Quick setup"],
    specifications: {
      linkType: "dofollow",
      contentType: "Directory entry",
      wordCount: 150,
      language: "English",
      niches: ["Finance", "Business", "Investment", "Markets"]
    }
  },
  {
    id: 15,
    name: "The Next Web Tech Review",
    description: "Technology product review and analysis with European market focus.",
    category: "Link Insertions",
    price: 950,
    stock: 7,
    status: "inactive",
    createdAt: "2024-03-05",
    updatedAt: "2024-03-05",
    domain: "thenextweb.com",
    domainAuthority: 82,
    domainRating: 79,
    monthlyTraffic: 1200000,
    turnaroundTime: 4,
    features: ["European focus", "Tech reviews", "Product analysis"],
    specifications: {
      linkType: "dofollow",
      contentType: "Tech review",
      wordCount: 75,
      language: "English",
      niches: ["Technology", "Gadgets", "Software", "Europe"]
    }
  },
  {
    id: 16,
    name: "CNBC Business Spotlight",
    description: "Business spotlight feature with video content and market analysis integration.",
    category: "Sponsored",
    price: 3800,
    stock: 2,
    status: "active",
    createdAt: "2024-03-08",
    updatedAt: "2024-03-08",
    domain: "cnbc.com",
    domainAuthority: 91,
    domainRating: 88,
    monthlyTraffic: 5400000,
    turnaroundTime: 9,
    features: ["Video content", "Market integration", "Business focus"],
    specifications: {
      linkType: "dofollow",
      contentType: "Business feature",
      wordCount: 1100,
      language: "English",
      niches: ["Business", "Markets", "Finance", "Corporate"]
    }
  },
  {
    id: 17,
    name: "TechTarget IT Publication",
    description: "IT-focused publication targeting enterprise technology decision makers.",
    category: "Guest Posts",
    price: 1100,
    stock: 15,
    status: "active",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
    domain: "techtarget.com",
    domainAuthority: 81,
    domainRating: 78,
    monthlyTraffic: 1500000,
    turnaroundTime: 6,
    features: ["Enterprise focus", "IT decision makers", "B2B audience"],
    specifications: {
      linkType: "dofollow",
      contentType: "IT article",
      wordCount: 900,
      language: "English",
      niches: ["IT", "Enterprise", "B2B", "Technology"]
    }
  },
  {
    id: 18,
    name: "ZDNet Technology Analysis",
    description: "In-depth technology analysis with focus on enterprise solutions and trends.",
    category: "Link Insertions",
    price: 720,
    stock: 9,
    status: "active",
    createdAt: "2024-03-12",
    updatedAt: "2024-03-12",
    domain: "zdnet.com",
    domainAuthority: 83,
    domainRating: 80,
    monthlyTraffic: 1700000,
    turnaroundTime: 3,
    features: ["Enterprise solutions", "Tech analysis", "Trend coverage"],
    specifications: {
      linkType: "dofollow",
      contentType: "Analysis article",
      wordCount: 80,
      language: "English",
      niches: ["Technology", "Enterprise", "Software", "Hardware"]
    }
  },
  {
    id: 19,
    name: "MarketWatch Financial News",
    description: "Financial news placement with market data integration and investor focus.",
    category: "Press Release",
    price: 650,
    stock: 18,
    status: "active",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15",
    domain: "marketwatch.com",
    domainAuthority: 86,
    domainRating: 83,
    monthlyTraffic: 2300000,
    turnaroundTime: 2,
    features: ["Market data", "Investor focus", "Financial news"],
    specifications: {
      linkType: "dofollow",
      contentType: "Financial news",
      wordCount: 400,
      language: "English",
      niches: ["Finance", "Markets", "Investment", "Economics"]
    }
  },
  {
    id: 20,
    name: "Crunchbase Company Profile",
    description: "Enhanced company profile with funding information and market positioning.",
    category: "Directory",
    price: 180,
    stock: 50,
    status: "active",
    createdAt: "2024-03-18",
    updatedAt: "2024-03-18",
    domain: "crunchbase.com",
    domainAuthority: 84,
    domainRating: 81,
    monthlyTraffic: 1400000,
    turnaroundTime: 1,
    features: ["Company profile", "Funding info", "Market positioning"],
    specifications: {
      linkType: "dofollow",
      contentType: "Company profile",
      wordCount: 300,
      language: "English",
      niches: ["Startups", "Funding", "Business", "Technology"]
    }
  }
]

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const getProductStats = (products: Product[]) => {
  const total = products.length
  const active = products.filter(p => p.status === 'active').length
  const inactive = products.filter(p => p.status === 'inactive').length
  const draft = products.filter(p => p.status === 'draft').length
  const lowStock = products.filter(p => p.stock <= 10).length
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0)
  
  // Calculate new products this month (for demo purposes)
  const newThisMonth = Math.floor(total * 0.15)
  
  return {
    total,
    active,
    inactive,
    draft,
    lowStock,
    totalValue,
    newThisMonth
  }
}