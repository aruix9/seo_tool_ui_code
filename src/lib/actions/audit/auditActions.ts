import axios from 'axios'
// import {backlinks, backlinks2} from "../../../../auditData"

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function getSummary(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post(API_BASE + '/api/v1/audit/summary', target)
  return response.data.summary
}

export async function getMetrics(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post(API_BASE + '/api/v1/audit/metrics', target)
  return response.data.metrics
}

export async function getBacklinksMetrics(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post(API_BASE + '/api/v1/audit/backlinks-metrics', target)
  return response.data.metrics
}

export async function getHistory(target: string, fromDate: string, toDate: string) {
  // return backlinks2;
  const body = {target, fromDate, toDate}
  const response = await axios.post(API_BASE + '/api/v1/audit/history', body)
  return response.data.new_lost_backlinks
}