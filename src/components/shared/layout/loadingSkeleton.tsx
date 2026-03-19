import { Skeleton } from '@/components/ui/skeleton'

const LoadingSkeleton = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-6 my-12'>
      <div className="flex flex-wrap gap-6 justify-between">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton