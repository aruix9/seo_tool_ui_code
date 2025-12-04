"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getAnchors } from "@/lib/actions/audit/auditActions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AnchorList = () => {
  const searchParams = useSearchParams();
  const [backlinkAnchors, setBacklinkAnchors] = useState(null);

  useEffect(() => {
    const fetchAuditData = async () => {
      const url = searchParams.get("url");
      // metrics API
      const backlinkAnchors = await getAnchors(url!, "refdomains");
      setBacklinkAnchors(backlinkAnchors);
    };

    fetchAuditData();
  }, [searchParams]);

  return (
    <Card className="w-1/2">
      <CardContent>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Anchor</TableHead>
              <TableHead>Backlinks</TableHead>
              <TableHead>Refdomains</TableHead>
              <TableHead>Do Follow</TableHead>
              <TableHead>No Follow</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backlinkAnchors &&
              backlinkAnchors.map((item, index) => (
                <TableRow>
                  <TableCell className="text-wrap whitespace-normal">
                    <Tooltip>
                      <TooltipTrigger className="text-left">
                        {item.anchor}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {`First seen - ${item.first_seen}, Last seen - ${item.last_visited}`}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-IN").format(
                      Number(item.backlinks)
                    )}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-IN").format(
                      Number(item.refdomains)
                    )}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-IN").format(
                      Number(item.dofollow_backlinks)
                    )}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-IN").format(
                      Number(item.nofollow_backlinks)
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AnchorList;
