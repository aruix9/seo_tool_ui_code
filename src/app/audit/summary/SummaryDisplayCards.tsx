import SummaryPieChart from './SummaryPieChart'
import { displayCard } from '../../../../data'

const SummaryDisplayCards = ({auditData}) => {
  return (
      <div className='flex flex-row gap-4'>
        {
          displayCard.map((type, index) => (
            <SummaryPieChart
              key={index}
              summaryData={auditData?.summary}
              type={type}
              typeName={type.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())}
            />
          ))
        }
      </div>
  )
}

export default SummaryDisplayCards