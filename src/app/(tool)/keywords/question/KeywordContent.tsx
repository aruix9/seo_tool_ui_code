import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter, useSearchParams } from "next/navigation";

const KeywordContent = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: Boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = (type: string) => {
    let offset = searchParams.get("offset");

    if (data?.total < 50) {
      offset = String(50);
    }

    if (!offset) {
      offset = String(0);
    }

    if (type == "next" && (Number(offset) == 0 || Number(offset) > 0)) {
      offset = String(Number(offset) + 50);
    }

    if (type == "prev" && Number(offset) > 50) {
      offset = String(Number(offset) - 50);
    }

    if (offset > data?.total) return;

    const params = new URLSearchParams(searchParams);
    params.set("offset", offset);

    router.push(`?${params.toString()}`);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Total number of keywords -{" "}
          {new Intl.NumberFormat("en-IN").format(Number(data.total))}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Keyword</TableHead>
              <TableHead>CPC</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Intents</TableHead>
              <TableHead>SERP Feature</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Competition</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.keywords.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>{item.cpc}</TableCell>
                <TableCell>{item.difficulty}</TableCell>
                <TableCell>{item.intents}</TableCell>
                <TableCell>{item.serp_feature}</TableCell>
                <TableCell>{item.volume}</TableCell>
                <TableCell>{item.competition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="gap-2 justify-end">
        <Button
          onClick={() => updateParam("prev")}
          className="w-10 h-10 flex leading-none items-center hover:bg-purple-300 rounded-md text-2xl border-1 border-primary"
        >
          &laquo;
        </Button>
        <Button
          onClick={() => updateParam("next")}
          className="w-10 h-10 flex leading-none items-center hover:bg-purple-300 rounded-md text-2xl border-1 border-primary"
        >
          &raquo;
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KeywordContent;
