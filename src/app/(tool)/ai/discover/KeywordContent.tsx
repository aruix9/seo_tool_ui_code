import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import SummaryTable from "./SummaryTable";
import TimeSeries from "./TimeSeries";
import TrafficDynamics from "./TrafficDynamics";

const KeywordContent = ({ data }: { data: any }) => {
  if (!data?.summary) {
    return <LoadingSkeleton />;
  }

  const { summary, time_series, traffic_dynamics } = data;

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-6">
          <SummaryTable data={summary} />
          <TimeSeries data={time_series} />
          <TrafficDynamics data={traffic_dynamics} />
        </div>
      </CardContent>
    </Card>
  );
};

export default KeywordContent;
