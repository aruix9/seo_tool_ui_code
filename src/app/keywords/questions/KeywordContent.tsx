import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const KeywordContent = ({ data }: any) => {
  if (!data?.total) {
    return <LoadingSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total - {data.total}</CardTitle>
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
    </Card>
  );
};

export default KeywordContent;
