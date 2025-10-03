export interface Audit {
  id: number
  title: string
  clientName: string
  clientEmail: string
  domain: string
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  type: 'backlink-audit' | 'seo-audit' | 'competitor-analysis' | 'technical-audit'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  createdAt: string
  updatedAt: string
  completedAt?: string
  assignedTo: string
  progress: number
  totalLinks?: number
  healthyLinks?: number
  toxicLinks?: number
  suspiciousLinks?: number
  findings: {
    issues: number
    recommendations: number
    criticalIssues: number
  }
  price: number
  paid: boolean
  deliveryDate: string
  notes: string
}

export const auditMockData: Audit[] = [
  {
    id: 1,
    title: "Complete SEO Audit - TechStartup Inc",
    clientName: "John Anderson",
    clientEmail: "john@techstartup.com",
    domain: "techstartup.com",
    status: "completed",
    type: "seo-audit",
    priority: "high",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-15",
    completedAt: "2024-02-15",
    assignedTo: "Sarah Williams",
    progress: 100,
    findings: {
      issues: 23,
      recommendations: 45,
      criticalIssues: 3
    },
    price: 1500,
    paid: true,
    deliveryDate: "2024-02-20",
    notes: "Client requested focus on mobile optimization and Core Web Vitals"
  },
  {
    id: 2,
    title: "Backlink Profile Analysis - E-commerce Store",
    clientName: "Maria Rodriguez",
    clientEmail: "maria@shopnow.com",
    domain: "shopnow.com",
    status: "in-progress",
    type: "backlink-audit",
    priority: "medium",
    createdAt: "2024-02-10",
    updatedAt: "2024-02-25",
    assignedTo: "Mike Johnson",
    progress: 65,
    totalLinks: 2840,
    healthyLinks: 1892,
    toxicLinks: 156,
    suspiciousLinks: 792,
    findings: {
      issues: 12,
      recommendations: 28,
      criticalIssues: 2
    },
    price: 800,
    paid: true,
    deliveryDate: "2024-03-01",
    notes: "Focus on identifying and removing toxic backlinks from PBNs"
  },
  {
    id: 3,
    title: "Competitor Analysis - FinTech Startup",
    clientName: "David Chen",
    clientEmail: "david@fintech.io",
    domain: "fintech.io",
    status: "pending",
    type: "competitor-analysis",
    priority: "medium",
    createdAt: "2024-02-20",
    updatedAt: "2024-02-20",
    assignedTo: "Jennifer Davis",
    progress: 0,
    findings: {
      issues: 0,
      recommendations: 0,
      criticalIssues: 0
    },
    price: 1200,
    paid: false,
    deliveryDate: "2024-03-10",
    notes: "Analyze top 5 competitors in the fintech space"
  },
  {
    id: 4,
    title: "Technical SEO Audit - News Website",
    clientName: "Robert Taylor",
    clientEmail: "robert@newsdaily.com",
    domain: "newsdaily.com",
    status: "in-progress",
    type: "technical-audit",
    priority: "urgent",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-28",
    assignedTo: "Sarah Williams",
    progress: 45,
    findings: {
      issues: 18,
      recommendations: 32,
      criticalIssues: 5
    },
    price: 2000,
    paid: true,
    deliveryDate: "2024-03-05",
    notes: "Site experiencing significant traffic drops, urgent technical review needed"
  },
  {
    id: 5,
    title: "Backlink Cleanup - Local Business",
    clientName: "Lisa Thompson",
    clientEmail: "lisa@localbiz.com",
    domain: "localbiz.com",
    status: "completed",
    type: "backlink-audit",
    priority: "low",
    createdAt: "2024-01-20",
    updatedAt: "2024-02-05",
    completedAt: "2024-02-05",
    assignedTo: "Mike Johnson",
    progress: 100,
    totalLinks: 450,
    healthyLinks: 380,
    toxicLinks: 25,
    suspiciousLinks: 45,
    findings: {
      issues: 8,
      recommendations: 15,
      criticalIssues: 1
    },
    price: 500,
    paid: true,
    deliveryDate: "2024-02-10",
    notes: "Small local business with limited backlink profile"
  },
  {
    id: 6,
    title: "SEO Health Check - Healthcare Portal",
    clientName: "Dr. Amanda White",
    clientEmail: "amanda@healthportal.com",
    domain: "healthportal.com",
    status: "in-progress",
    type: "seo-audit",
    priority: "high",
    createdAt: "2024-02-25",
    updatedAt: "2024-03-01",
    assignedTo: "Jennifer Davis",
    progress: 30,
    findings: {
      issues: 15,
      recommendations: 22,
      criticalIssues: 4
    },
    price: 1800,
    paid: true,
    deliveryDate: "2024-03-15",
    notes: "Healthcare site needs YMYL compliance review"
  },
  {
    id: 7,
    title: "Link Building Audit - Software Company",
    clientName: "Thomas Brown",
    clientEmail: "thomas@softwaretech.com",
    domain: "softwaretech.com",
    status: "pending",
    type: "backlink-audit",
    priority: "medium",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    assignedTo: "Mike Johnson",
    progress: 0,
    totalLinks: 0,
    findings: {
      issues: 0,
      recommendations: 0,
      criticalIssues: 0
    },
    price: 950,
    paid: false,
    deliveryDate: "2024-03-20",
    notes: "New client wants comprehensive backlink strategy"
  },
  {
    id: 8,
    title: "Competitor Backlink Analysis - Fashion Brand",
    clientName: "Emma Wilson",
    clientEmail: "emma@fashionbrand.com",
    domain: "fashionbrand.com",
    status: "cancelled",
    type: "competitor-analysis",
    priority: "low",
    createdAt: "2024-02-08",
    updatedAt: "2024-02-12",
    assignedTo: "Jennifer Davis",
    progress: 15,
    findings: {
      issues: 2,
      recommendations: 5,
      criticalIssues: 0
    },
    price: 700,
    paid: false,
    deliveryDate: "2024-02-28",
    notes: "Client cancelled due to budget constraints"
  },
  {
    id: 9,
    title: "Technical Audit - E-learning Platform",
    clientName: "Kevin Martinez",
    clientEmail: "kevin@elearning.edu",
    domain: "elearning.edu",
    status: "completed",
    type: "technical-audit",
    priority: "high",
    createdAt: "2024-01-15",
    updatedAt: "2024-02-01",
    completedAt: "2024-02-01",
    assignedTo: "Sarah Williams",
    progress: 100,
    findings: {
      issues: 31,
      recommendations: 48,
      criticalIssues: 6
    },
    price: 2200,
    paid: true,
    deliveryDate: "2024-02-05",
    notes: "Educational site with complex structure, many technical issues resolved"
  },
  {
    id: 10,
    title: "Link Risk Assessment - Travel Blog",
    clientName: "Sophie Clark",
    clientEmail: "sophie@travelblog.com",
    domain: "travelblog.com",
    status: "in-progress",
    type: "backlink-audit",
    priority: "medium",
    createdAt: "2024-02-18",
    updatedAt: "2024-02-28",
    assignedTo: "Mike Johnson",
    progress: 80,
    totalLinks: 1250,
    healthyLinks: 950,
    toxicLinks: 89,
    suspiciousLinks: 211,
    findings: {
      issues: 14,
      recommendations: 25,
      criticalIssues: 2
    },
    price: 600,
    paid: true,
    deliveryDate: "2024-03-08",
    notes: "Travel blogger concerned about algorithm update impact"
  },
  {
    id: 11,
    title: "SEO Audit - Real Estate Agency",
    clientName: "Michael Davis",
    clientEmail: "michael@realestate.com",
    domain: "realestate.com",
    status: "pending",
    type: "seo-audit",
    priority: "low",
    createdAt: "2024-03-02",
    updatedAt: "2024-03-02",
    assignedTo: "Jennifer Davis",
    progress: 0,
    findings: {
      issues: 0,
      recommendations: 0,
      criticalIssues: 0
    },
    price: 1100,
    paid: false,
    deliveryDate: "2024-03-25",
    notes: "Real estate agency wants to improve local search visibility"
  },
  {
    id: 12,
    title: "Backlink Profile Review - Gaming Site",
    clientName: "Alex Johnson",
    clientEmail: "alex@gamingsite.com",
    domain: "gamingsite.com",
    status: "completed",
    type: "backlink-audit",
    priority: "medium",
    createdAt: "2024-01-28",
    updatedAt: "2024-02-18",
    completedAt: "2024-02-18",
    assignedTo: "Mike Johnson",
    progress: 100,
    totalLinks: 3200,
    healthyLinks: 2100,
    toxicLinks: 320,
    suspiciousLinks: 780,
    findings: {
      issues: 25,
      recommendations: 38,
      criticalIssues: 4
    },
    price: 1000,
    paid: true,
    deliveryDate: "2024-02-22",
    notes: "Gaming site with aggressive link building history, many toxic links removed"
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

export const getAuditStats = (audits: Audit[]) => {
  const total = audits.length
  const pending = audits.filter(a => a.status === 'pending').length
  const inProgress = audits.filter(a => a.status === 'in-progress').length
  const completed = audits.filter(a => a.status === 'completed').length
  const cancelled = audits.filter(a => a.status === 'cancelled').length
  const totalRevenue = audits.filter(a => a.paid).reduce((sum, a) => sum + a.price, 0)
  const pendingRevenue = audits.filter(a => !a.paid && a.status !== 'cancelled').reduce((sum, a) => sum + a.price, 0)
  const urgentAudits = audits.filter(a => a.priority === 'urgent' && a.status !== 'completed').length
  const averageProgress = audits.filter(a => a.status === 'in-progress').reduce((sum, a) => sum + a.progress, 0) / inProgress || 0

  return {
    total,
    pending,
    inProgress,
    completed,
    cancelled,
    totalRevenue,
    pendingRevenue,
    urgentAudits,
    averageProgress: Math.round(averageProgress)
  }
}