import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { auditDataType } from '@/../types/type'

const SummaryCardWrapper = ({
  metrics,
  summary,
  anchors,
  refDomains,
}: auditDataType) => {
  return (
    <div className='flex flex-row mb-16 flex-wrap'>
      <div className='flex flex-col'>
        <h2 className='font-bold mb-4'>Metrics</h2>
        <div className='flex gap-6 flex-wrap'>
          {Object.keys(metrics).map(
            (metric) =>
              metric !== '_id' &&
              metric !== 'target' &&
              metric !== '__v' && (
                <Card key={metric} className='gap-2 text-center'>
                  <CardHeader>
                    <CardTitle className='capitalize w-[140px]'>
                      {metric.replaceAll('_', ' ')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{metrics[metric]}</CardContent>
                </Card>
              ),
          )}
        </div>
        <hr className='border my-10' />
        <h2 className='font-bold mb-2'>Summary</h2>
        <div className='flex gap-6 flex-wrap'>
          {Object.keys(summary).map(
            (metric) =>
              metric !== '_id' &&
              metric !== 'backlinks' &&
              metric !== 'createdAt' &&
              metric !== 'updatedAt' &&
              metric !== 'target' &&
              metric !== '__v' &&
              typeof summary[metric] !== 'object' && (
                <Card key={metric} className='gap-2 text-center'>
                  <CardHeader>
                    <CardTitle className='capitalize w-[140px]'>
                      {metric.replaceAll('_', ' ')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{summary[metric]}</CardContent>
                </Card>
              ),
          )}
        </div>
      </div>
      <hr className='border my-10 w-full' />
      <Card className='shadow-none flex-row border-0 w-full p-0'>
        <Card className='gap-2 w-1/2'>
          <CardHeader>
            <CardTitle>Anchors</CardTitle>
          </CardHeader>
          <CardContent>
            {anchors.map((domain, index) => (
              <div key={index} className='border-b py-2'>
                {Object.keys(domain).map(
                  (metric) =>
                    metric !== '_id' &&
                    metric !== 'brand' &&
                    metric !== 'type' &&
                    metric !== 'target' &&
                    metric !== '__v' &&
                    metric !== 'createdAt' &&
                    metric !== 'updatedAt' &&
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
        <Card className='gap-2 w-1/2'>
          <CardHeader>
            <CardTitle>Refdomains</CardTitle>
          </CardHeader>
          <CardContent>
            {refDomains.map((domain, index) => (
              <div key={index} className='border-b py-2'>
                {Object.keys(domain).map(
                  (metric) =>
                    metric !== '_id' &&
                    metric !== 'brand' &&
                    metric !== 'type' &&
                    metric !== 'target' &&
                    metric !== '__v' &&
                    metric !== 'createdAt' &&
                    metric !== 'updatedAt' &&
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
      </Card>
    </div>
  )
}

export default SummaryCardWrapper
