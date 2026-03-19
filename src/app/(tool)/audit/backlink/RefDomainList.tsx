"use client";
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
import { Card, CardContent } from "@/components/ui/card";
import { getRefdomains } from "@/lib/actions/audit/auditActions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const RefDomainList = () => {
  const searchParams = useSearchParams();
  const [backlinkRefdomains, setBacklinkRefdomains] = useState(null);

  useEffect(() => {
    const fetchAuditData = async () => {
      const url = searchParams.get("url");
      // metrics API
      const backlinkRefdomains = await getRefdomains(url!, "refdomains", 100);
      setBacklinkRefdomains(backlinkRefdomains);
    };

    fetchAuditData();
  }, [searchParams]);

  return (
    <Card className="w-1/2">
      <CardContent>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Refdomain</TableHead>
              <TableHead>Backlinks</TableHead>
              <TableHead>Do Follow</TableHead>
              <TableHead>Domain Inline Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backlinkRefdomains &&
              backlinkRefdomains.map((item, index) => (
                <TableRow>
                  <TableCell className="text-wrap whitespace-normal">
                    <Tooltip>
                      <TooltipTrigger className="text-left">
                        {item.refdomain}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{`First seen - ${item.first_seen}`}</p>
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
                      Number(item.dofollow_backlinks)
                    )}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-IN").format(
                      Number(item.domain_inlink_rank)
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

export default RefDomainList;
