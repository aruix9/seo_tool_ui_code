export interface SeoProject {
  id: string;
  name: string;
  domain: string;
  createdAt: string;
  updatedAt: string;
}

export interface KeywordRanking {
  id: string;
  keyword: string;
  position: number;
  previousPosition: number;
  searchVolume: number;
  difficulty: number;
  url: string;
}

export interface SiteAuditSummary {
  healthScore: number;
  errors: number;
  warnings: number;
  notices: number;
  crawledPages: number;
}
