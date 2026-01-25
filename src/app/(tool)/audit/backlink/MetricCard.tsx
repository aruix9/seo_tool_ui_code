import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Fragment } from "react";

const MetricCard = ({ metric }) => {
  const { metrics } = metric;

  return (
    <>
      {metrics.map((metric, i) => (
        <Card className="flex flex-col text-center grow" key={i}>
          {Object.keys(metric).map((currentKey, index) => (
            <Fragment key={currentKey + index}>
              {index === 0 && (
                <CardTitle className="">{metric["target"]}</CardTitle>
              )}
              {index > 0 && (
                <div className="gap-0">
                  <CardHeader className="">
                    <CardDescription>
                      {currentKey
                        .replace(/_/g, " ")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xl pt-2 font-medium">
                    {new Intl.NumberFormat("en-IN").format(
                      Number(metric[currentKey])
                    )}
                  </CardContent>
                </div>
              )}
            </Fragment>
          ))}
          {i == 0 && (
            <div className="text-center">
              <Link
                href={`backlink?url=${metric["target"]}`}
                className="border-2 px-2 py-1 border-primary rounded-md"
              >
                More
              </Link>
            </div>
          )}
        </Card>
      ))}
    </>
  );
};

export default MetricCard;
