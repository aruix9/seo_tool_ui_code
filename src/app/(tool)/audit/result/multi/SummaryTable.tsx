import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { summaryList } from "../../../../../../data";

const SummaryTable = ({ auditData, auditKeys }) => {
  return (
    <div className="w-full my-8">
      <Table>
        {summaryList.length === 4 && (
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              {auditData &&
                auditData?.summary.map((summary) => (
                  <TableHead key={summary.target}>{summary.target}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          {auditKeys &&
            auditKeys?.summaryKeys.map(
              (currentKey: string) =>
                summaryList.includes(currentKey) && (
                  <TableRow key={currentKey}>
                    <TableCell className="capitalize">
                      {currentKey.replaceAll("_", " ")}
                    </TableCell>

                    {auditData &&
                      auditData.summary.map((summary, index: number) => (
                        <TableCell key={index}>
                          {summary[currentKey].toLocaleString("en-IN")}
                        </TableCell>
                      ))}
                  </TableRow>
                ),
            )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SummaryTable;
