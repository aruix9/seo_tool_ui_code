import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton';
import SummaryCard from './SummaryCard';
import PerformanceTraffics from './PerformanceTraffics';
import TrafficDynamicsCard from './TrafficDynamicsCard';

const Results = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
    if (isLoading) return <LoadingSkeleton />

    if (!data) return;

    return (
        <div className="flex flex-col gap-6 mt-4">
            <SummaryCard summary={data.summary} />
            <PerformanceTraffics time_series={data.time_series} />
            <TrafficDynamicsCard traffic_dynamics={data.traffic_dynamics} />
        </div>
    )
}

export default Results
