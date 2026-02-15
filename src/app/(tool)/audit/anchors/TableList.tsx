"use client";
import { Suspense, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllAnchors } from "@/lib/actions/audit/auditActions";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { AnchorType } from "../../../../../types/type";

const TableList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backlinkData, setBacklinkData] = useState<AnchorType[] | null>(null);

  useEffect(() => {
    const fetchBacklinkData = async () => {
      const summaryResponse = await getAllAnchors();
      setBacklinkData([...summaryResponse]);
    };

    fetchBacklinkData();
  }, []);

  if (!backlinkData || loading) {
    return <LoadingSkeleton />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Brand</TableHead>
            <TableHead className="break-words">Anchor</TableHead>
            <TableHead className="w-[120px]">Do Follow</TableHead>
            <TableHead className="w-[120px]">No Follow</TableHead>
            <TableHead className="w-[100px]">Refdomain</TableHead>
            <TableHead className="w-[120px]">First Seen</TableHead>
            <TableHead className="w-[120px]">Last Visited</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {backlinkData?.map((link, index) => (
            <TableRow key={index}>
              <TableCell>
                {link.brand} ({link.target})
              </TableCell>
              <TableCell className="overflow-hidden">
                <span title={link.anchor}>{link.anchor}</span>
              </TableCell>
              <TableCell>{link.dofollow_backlinks}</TableCell>
              <TableCell>{link.nofollow_backlinks}</TableCell>
              <TableCell>{link.refdomains}</TableCell>
              <TableCell>{link.first_seen}</TableCell>
              <TableCell>{link.last_visited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Suspense>
  );
};

export default TableList;
