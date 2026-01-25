import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

const SingleCard = ({ metrics }) => {
  return (
    <div className="flex gap-6">
      {Object.keys(metrics).map(
        (currentKey, index) =>
          index > 0 && (
            <Card className="gap-0 grow text-center" key={currentKey + index}>
              <CardHeader className="">
                <CardTitle className="text-sm font-normal">
                  {currentKey
                    .replace(/_/g, " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl pt-2 font-medium">
                {new Intl.NumberFormat("en-IN").format(
                  Number(metrics[currentKey])
                )}
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
};

export default SingleCard;
