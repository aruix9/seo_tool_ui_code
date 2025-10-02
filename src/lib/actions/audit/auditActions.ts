import axios from 'axios'
// import {backlinks, backlinks2} from "../../../../auditData"

export async function getSummary(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post('http://localhost:3000/api/v1/audit/summary', target)
  return response.data.summary
}

export async function getMetrics(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post('http://localhost:3000/api/v1/audit/metrics', target)
  return response.data.metrics
}

export async function getBacklinksMetrics(targets: string[]) {
  // return backlinks2;
  const target = {target: targets}
  const response = await axios.post('http://localhost:3000/api/v1/audit/backlinks-metrics', target)
  return response.data.metrics
}

export async function getHistory(target: string, fromDate: string, toDate: string) {
  // return backlinks2;
  const body = {target, fromDate, toDate}
  const response = await axios.post('http://localhost:3000/api/v1/audit/history', body)
  return response.data.new_lost_backlinks
}