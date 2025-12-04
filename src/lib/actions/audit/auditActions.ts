import axios from "axios";
import { summaryData } from "../../../../auditData";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

// get Summary
export async function getSummary(targets: string[]) {
  // return summaryData.summary;
  const target = { target: targets };
  const response = await axios.post(API_BASE + "/api/v1/audit/summary", target);
  return response.data.summary;
}

// get metrics
export async function getMetrics(targets: string[]) {
  // return summaryData.metrics;
  const target = { target: targets };
  const response = await axios.post(API_BASE + "/api/v1/audit/metrics", target);
  return response.data.metrics;
}

// get anchors
export const getAnchors = async (target: string, orderBy: string) => {
  // return summaryData.anchors;
  const body = { target, orderBy };
  const response = await axios.post(API_BASE + "/api/v1/audit/anchors", body);
  return response.data.new_lost_backlinks;
};

// get refdomains
export const getRefdomains = async (
  target: string,
  orderBy: string,
  limit: number
) => {
  // return summaryData.refdomains;
  const body = { target, orderBy, limit };
  const response = await axios.post(
    API_BASE + "/api/v1/audit/refdomains",
    body
  );
  return response.data.new_lost_backlinks;
};

// Similar keywords
export const getSimilarKeywordData = async (body: any) => {
  // return summaryData.similarKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/keywords/similar",
    body
  );
  return response.data;
};

// Related keywords
export const getRelatedKeywordData = async (body: any) => {
  // return summaryData.relatedKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/keywords/related",
    body
  );
  return response.data;
};

// Questions keywords
export const getQuestionsKeywordData = async (body: any) => {
  // return summaryData.questionsKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/keywords/questions",
    body
  );
  return response.data;
};

// Longtail keywords
export const getLongtailKeywordData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/keywords/longtail",
    body
  );
  return response.data;
};

// ai overview
export const getAiOverviewData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(API_BASE + "/api/v1/aio/overview", body);
  return response.data;
};

// ai discover
export const getAiDiscoverData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/aio/discover-brand",
    body
  );
  return response.data;
};

// ai keywords
export const getAiKeywordsData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/aio/keywords-by-target",
    body
  );
  return response.data;
};

// ai keywords Target
export const getAiKeywordsTargetData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/aio/keywords-by-target",
    body
  );
  return response.data;
};

// ai keywords Brand
export const getAiKeywordsBrandData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + "/api/v1/aio/keywords-by-brand",
    body
  );
  return response.data;
};
