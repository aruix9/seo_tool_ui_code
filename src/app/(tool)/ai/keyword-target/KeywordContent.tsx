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
import Link from "next/link";
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

  if (!data?.total) return;

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  console.log(data);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-8">
          <div>
            Total number of keywords -{" "}
            {new Intl.NumberFormat("en-IN").format(Number(data.total))}
          </div>
          <div>Date: {data.date}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Keyword</TableHead>
              <TableHead className="w-[100px]">Volume</TableHead>
              <TableHead className="w-auto">Text</TableHead>
              <TableHead className="w-[400px]">Links</TableHead>
              <TableHead className="w-[100px]">Link Type</TableHead>
              <TableHead className="w-[100px]">Snippet Length</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.keywords.map((item, i) => (
              <TableRow>
                <TableCell className="whitespace-normal align-top">
                  {item.keyword}
                </TableCell>
                <TableCell className="align-top">
                  {new Intl.NumberFormat("en-IN").format(Number(item.volume))}
                </TableCell>
                <TableCell className="whitespace-normal align-top">
                  {item?.snippet?.text}
                </TableCell>
                <TableCell className="whitespace-normal overflow-hidden align-top">
                  <div className="max-h-[300px] overflow-y-auto">
                    <LinkList list={item?.snippet?.links} />
                  </div>
                </TableCell>
                <TableCell className="align-top">{item.type}</TableCell>
                <TableCell className="align-top">
                  {new Intl.NumberFormat("en-IN").format(
                    Number(item?.snippet?.text?.length)
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="gap-2 justify-end">
        <Button
          disabled={data.total <= 50}
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

import React from "react";

const LinkList = ({ list }: any) => {
  if (!list.length) return;
  return list.map((item, i) => (
    <div className="mb-2">
      <Link
        key={i}
        href={item}
        className="hover:underline text-purple-600 truncate block"
      >
        {item}
      </Link>
    </div>
  ));
};

export default KeywordContent;
