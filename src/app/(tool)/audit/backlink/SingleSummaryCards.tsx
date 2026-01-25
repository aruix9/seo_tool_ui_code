import { allSummaryList } from "../../../../../data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SingleSummaryTable = ({ auditKeys, summary, metrics }) => {
  const shouldShowColumn = function (currentKey) {
    return (
      allSummaryList.includes(currentKey) &&
      !Object.keys(metrics).includes(currentKey)
    );
  };

  return (
    <div className="flex flex-wrap gap-6 mt-6">
      {auditKeys &&
        auditKeys?.summaryKeys.map(
          (currentKey: string) =>
            shouldShowColumn(currentKey) && (
              <Card className="gap-0 grow text-center" key={currentKey}>
                <CardHeader className="">
                  <CardTitle className="text-sm font-normal">
                    {currentKey
                      .replace(/_/g, " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xl pt-2 font-medium">
                  {summary[currentKey].toLocaleString("en-IN")}
                </CardContent>
              </Card>
            )
        )}
    </div>
  );
};

export default SingleSummaryTable;
