import axios from 'axios'
import {summaryData} from "../../../../auditData"

export async function getSummary(targets: String[]) {
    return summaryData.summary;
//   const response = await axios.post('http://localhost:3000/api/v1/audit/summary', targets)
//   return response.data
}