import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OverviewCellItem from "./OverviewCellItem";

const SummaryTable = ({ data }: any) => {
  return (
    <div>
      <h1 className="font-bold mb-2">AI Summary</h1>
      <Table>
        <TableHeader>
          <TableRow className="capitalize">
            <TableHead>
              {"ai_opportunity_traffic".replaceAll("_", " ")}
            </TableHead>
            <TableHead>{"average_position".replaceAll("_", " ")}</TableHead>
            <TableHead>{"link_presence".replaceAll("_", " ")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="capitalize">
            <TableCell>
              <OverviewCellItem
                obj={data.ai_opportunity_traffic}
                type="change_absolute"
              />
              <OverviewCellItem
                obj={data.ai_opportunity_traffic}
                type="change_percent"
              />
              <OverviewCellItem
                obj={data.ai_opportunity_traffic}
                type="current"
              />
              <OverviewCellItem
                obj={data.ai_opportunity_traffic}
                type="previous"
              />
            </TableCell>
            <TableCell>
              <OverviewCellItem
                obj={data.average_position}
                type="change_absolute"
              />
              <OverviewCellItem
                obj={data.average_position}
                type="change_percent"
              />
              <OverviewCellItem obj={data.average_position} type="current" />
              <OverviewCellItem obj={data.average_position} type="previous" />
            </TableCell>
            <TableCell>
              <OverviewCellItem
                obj={data.link_presence}
                type="change_absolute"
              />
              <OverviewCellItem
                obj={data.link_presence}
                type="change_percent"
              />
              <OverviewCellItem obj={data.link_presence} type="current" />
              <OverviewCellItem obj={data.link_presence} type="previous" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SummaryTable;
