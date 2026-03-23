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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const KeywordContent = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedContent, setSelectedContent] = useState(null);

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

  return (
    <>
      <Card className="mb-8">
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
          <div className="flex flex-wrap -mx-4">
            {data.keywords.map((item, i) => (
              <div className="w-1/2 p-4" key={i}>
                <div className="border rounded-md p-6 flex flex-col">
                  <h3 className="mb-4 font-bold text-2xl">{item.keyword}</h3>
                  <div className="mb-4 flex gap-6 text-muted-foreground">
                    <span><span>Snippet Lenght:</span> {new Intl.NumberFormat("en-IN").format(Number(item?.snippet?.text?.length))}</span>
                    <span><span>Link Type:</span> {item.type}</span>
                    <span><span>Volume:</span> {new Intl.NumberFormat("en-IN").format(Number(item.volume))}</span>
                  </div>
                  <div className="mb-6">
                    <div className="max-h-[124px] overflow-hidden">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({children}) => <p className="mb-2">{children}</p>,
                          pre: ({children}) => (
                            <code className="font-[inherit] whitespace-normal mb-2">{children}</code>
                          ),
                          code: ({children}) => (
                            <code className="font-[inherit]">{children}</code>
                          )
                        }}
                      >
                        {item?.snippet?.text}
                      </ReactMarkdown>
                    </div>
                    <div className="max-h-[150px] overflow-y-auto mt-6">
                      <h4 className="mb-2 font-bold">Links</h4>
                      <LinkList list={item?.snippet?.links} />
                    </div>
                  </div>
                  <span className="text-primary cursor-pointer" onClick={() => setSelectedContent(item?.snippet?.text)}>Read More</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4 border-b-2">
              <h2 className="text-2xl font-bold">AI Description</h2>
              <button
                onClick={() => setSelectedContent(null)}
                className="mb-4 text-4xl font-light hover:text-gray-700"
              >&times;</button>
            </div>
            <div className="max-h-[78vh] overflow-auto">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({children}) => <p className="mb-2">{children}</p>,
                  pre: ({children}) => (
                    <code className="font-[inherit] whitespace-normal mb-2">{children}</code>
                  ),
                  code: ({children}) => (
                    <code className="font-[inherit]">{children}</code>
                  )
                }}
              >
                {selectedContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from "react";

const LinkList = ({ list }: any) => {
  if (!list.length) return;
  return list.map((item, i) => (
    <Link
      key={i}
      href={item}
      className="hover:underline hover:text-purple-600 text-muted-foreground truncate block"
    >
      {item}
    </Link>
  ));
};

export default KeywordContent;
