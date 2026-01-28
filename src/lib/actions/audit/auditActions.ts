import axios from 'axios'
// import { summaryData } from '../../../../auditData'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE

// get Summary
export async function getSummary(targets: string[]) {
  // return summaryData.summary;
  const target = { target: targets }
  const response = await axios.post(API_BASE + '/api/v1/audit/summary', target)
  return response.data
}

// get Summary
export async function getbacklinkData() {
  const response = await axios.get(API_BASE + '/api/v1/audit/all-backlinks')
  console.log(response.data)
  return response.data
}

// get metrics
export async function getMetrics(targets: string[]) {
  // return summaryData.metrics;
  const target = { target: targets }
  const response = await axios.post(API_BASE + '/api/v1/audit/metrics', target)
  return response.data
}

// get anchors
export const getAnchors = async (target: string, orderBy: string) => {
  // return summaryData.anchors;
  const body = { target, orderBy }
  const response = await axios.post(API_BASE + '/api/v1/audit/anchors', body)
  return response.data
}

// get refdomains
export const getRefdomains = async (
  target: string,
  orderBy: string,
  limit: number,
) => {
  // return summaryData.refdomains;
  const body = { target, orderBy, limit }
  const response = await axios.post(API_BASE + '/api/v1/audit/refdomains', body)
  return response.data
}

// Similar keywords
export const getSimilarKeywordData = async (body: any) => {
  // return summaryData.similarKeywordData;
  const response = await axios.post(API_BASE + '/api/v1/keywords/similar', body)
  return response.data
}

// Related keywords
export const getRelatedKeywordData = async (body: any) => {
  // return summaryData.relatedKeywordData;
  const response = await axios.post(API_BASE + '/api/v1/keywords/related', body)
  return response.data
}

// Questions keywords
export const getQuestionsKeywordData = async (body: any) => {
  // return summaryData.questionsKeywordData;
  const response = await axios.post(
    API_BASE + '/api/v1/keywords/questions',
    body,
  )
  return response.data
}

// Longtail keywords
export const getLongtailKeywordData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  const response = await axios.post(
    API_BASE + '/api/v1/keywords/longtail',
    body,
  )
  return response.data
}

// ai overview
export const getAiOverviewData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  try {
    const response = await axios.post(API_BASE + '/api/v1/ai/overview', body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ai discover
export const getAiDiscoverData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  try {
    const response = await axios.post(
      API_BASE + '/api/v1/ai/discover-brand',
      body,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ai keywords
export const getAiKeywordsByTargetData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  try {
    const response = await axios.post(
      API_BASE + '/api/v1/ai/keywords-by-target',
      body,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ai keywords
export const getAiKeywordsByBrandData = async (body: any) => {
  // return summaryData.longtailKeywordData;
  try {
    const response = await axios.post(
      API_BASE + '/api/v1/ai/keywords-by-brand',
      body,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
