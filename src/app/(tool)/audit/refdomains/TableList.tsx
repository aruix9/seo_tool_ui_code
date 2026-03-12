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
import { getAllRefDomains } from "@/lib/actions/audit/auditActions";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { RefdomainType } from "../../../../../types/type";

const TableList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backlinkData, setBacklinkData] = useState<RefdomainType[] | null>(
    null,
  );

  useEffect(() => {
    const fetchBacklinkData = async () => {
      const summaryResponse = await getAllRefDomains();
      setBacklinkData([...summaryResponse]);
    };

    fetchBacklinkData();
  }, []);

  if (!backlinkData || loading) {
    return <LoadingSkeleton />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brand</TableHead>
            <TableHead>Do Follow</TableHead>
            <TableHead>Inlink Rank</TableHead>
            <TableHead>First Seen</TableHead>
            <TableHead>Refdomain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {backlinkData?.map((link, index) => (
            <TableRow key={index}>
              <TableCell>
                {link.brand} ({link.target})
              </TableCell>
              <TableCell>{link.dofollow_backlinks}</TableCell>
              <TableCell>{link.domain_inlink_rank}</TableCell>
              <TableCell>{link.first_seen}</TableCell>
              <TableCell>{link.refdomain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Suspense>
  );
};

export default TableList;
