import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TimeSeries = ({ data }: any) => {
  return (
    <div>
      <h1 className="font-bold mb-2">Time Series</h1>
      <Table>
        <TableHeader>
          <TableRow className="capitalize">
            <TableHead>
              {"ai_opportunity_traffic".replaceAll("_", " ")}
            </TableHead>
            <TableHead>{"avg_position".replaceAll("_", " ")}</TableHead>
            <TableHead>{"link_presence".replaceAll("_", " ")}</TableHead>
            <TableHead>{"organic_traffic".replaceAll("_", " ")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <ListItem data={data.ai_opportunity_traffic} />
            </TableCell>
            <TableCell>
              <ListItem data={data.avg_position} />
            </TableCell>
            <TableCell>
              <ListItem data={data.link_presence} />
            </TableCell>
            <TableCell>
              <ListItem data={data.organic_traffic} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const ListItem = ({ data }: any) => {
  if (!data) return;
  return (
    <>
      {data.map((item: any, i: number) => (
        <div key={i} className="flex justify-between pr-6">
          <span>{item.date} :</span>
          <span>{item.value}</span>
        </div>
      ))}
    </>
  );
};

export default TimeSeries;
