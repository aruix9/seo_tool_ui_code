import { apiClient } from '../lib/api/axios';
import { SeoProject, KeywordRanking, SiteAuditSummary } from '../types/seo';

export const seoService = {
  getProjects: async (): Promise<SeoProject[]> => {
    // const response = await apiClient.get('/projects');
    // return response.data;
    
    // Mocking for initial setup until backend is ready
    return [
      { id: '1', name: 'Acme Corp', domain: 'acme.com', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    ];
  },

  getRankings: async (projectId: string): Promise<KeywordRanking[]> => {
    // const response = await apiClient.get(`/projects/${projectId}/rankings`);
    // return response.data;
    return [];
  },

  getAuditSummary: async (projectId: string): Promise<SiteAuditSummary> => {
    // const response = await apiClient.get(`/projects/${projectId}/audit/summary`);
    // return response.data;
    return { healthScore: 85, errors: 12, warnings: 45, notices: 120, crawledPages: 500 };
  }
};
