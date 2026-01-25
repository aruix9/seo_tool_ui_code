import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TrafficDynamics = ({ data }: any) => {
  return (
    <div>
      <h1 className="font-bold mb-2">Traffic Dynamics</h1>
      <Table>
        <TableHeader>
          <TableRow className="capitalize">
            <TableHead>{"aio_traffic".replaceAll("_", " ")}</TableHead>
            <TableHead>{"organic_traffic".replaceAll("_", " ")}</TableHead>
            <TableHead>{"overall_traffic".replaceAll("_", " ")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <ListItem data={data.aio_traffic} />
            </TableCell>
            <TableCell>
              <ListItem data={data.organic_traffic} />
            </TableCell>
            <TableCell>
              <ListItem data={data.overall_traffic} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const ListItem = ({ data }: any) => {
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

export default TrafficDynamics;
