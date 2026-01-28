import React from 'react'
import MetricCard from './MetricCard'
import { allSummaryList } from '../../../../../data'
import SummaryTable from '../summary/multi/SummaryTable'

const MultiUrls = ({ backlinkData, auditKeys }) => {
  return (
    <>
      <div className='flex gap-6'>
        <MetricCard metric={backlinkData} />
      </div>
      <SummaryTable
        auditData={backlinkData}
        auditKeys={auditKeys}
        summaryList={allSummaryList}
      />
    </>
  )
}

export default MultiUrls
