import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { auditDataType } from '@/../types/type'

const SummaryCardWrapper = ({
  metrics,
  summary,
  anchors,
  refDomains,
}: auditDataType) => {
  return (
    <div className='flex flex-row gap-4 mb-16'>
      <Card className='gap-2'>
        <CardHeader>
          <CardTitle>Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(metrics).map(
            (metric) =>
              metric !== '_id' &&
              metric !== 'target' &&
              metric !== '__v' && (
                <div className='flex gap-4 my-1' key={metric}>
                  <span className='capitalize w-[140px]'>
                    {metric.replaceAll('_', ' ')}:{' '}
                  </span>
                  <span>{metrics[metric]}</span>
                </div>
              ),
          )}
        </CardContent>
      </Card>
      <Card className='gap-2'>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(summary).map(
            (metric) =>
              metric !== '_id' &&
              metric !== 'backlinks' &&
              metric !== 'createdAt' &&
              metric !== 'updatedAt' &&
              metric !== 'target' &&
              metric !== '__v' &&
              typeof summary[metric] !== 'object' && (
                <div className='flex gap-4 my-1' key={metric}>
                  <span className='capitalize'>
                    {metric.replaceAll('_', ' ')}:{' '}
                  </span>
                  <span>{summary[metric]}</span>
                </div>
              ),
          )}
        </CardContent>
      </Card>
      <Card className='gap-2'>
        <CardHeader>
          <CardTitle>Anchors</CardTitle>
        </CardHeader>
        <CardContent>
          {anchors.map((domain, index) => (
            <div key={index} className='border-b py-2'>
              {Object.keys(domain).map(
                (metric) =>
                  typeof domain[metric] !== 'object' && (
                    <div className='flex gap-4 my-1' key={metric}>
                      <span className='capitalize'>
                        {metric.replaceAll('_', ' ')}:{' '}
                      </span>
                      <span>{domain[metric]}</span>
                    </div>
                  ),
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className='gap-2'>
        <CardHeader>
          <CardTitle>Refdomains</CardTitle>
        </CardHeader>
        <CardContent>
          {refDomains.map((domain, index) => (
            <div key={index} className='border-b py-2'>
              {Object.keys(domain).map(
                (metric) =>
                  typeof domain[metric] !== 'object' && (
                    <div className='flex gap-4 my-1' key={metric}>
                      <span className='capitalize'>
                        {metric.replaceAll('_', ' ')}:{' '}
                      </span>
                      <span>{domain[metric]}</span>
                    </div>
                  ),
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default SummaryCardWrapper
