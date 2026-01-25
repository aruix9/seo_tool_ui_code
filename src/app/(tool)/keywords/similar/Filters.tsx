"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TextField from "@/components/shared/form/textField";
import { filterDefaultValues, filterSchemaObject } from "../SchemaFilters";
import SelectField from "@/components/shared/form/selectField";
import { getSimilarKeywordData } from "@/lib/actions/audit/auditActions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type FilterFormProps = {
  onFiltered: (data: any) => void;
};

const filterSchema = z.object(filterSchemaObject);

const selectList = [
  { value: "keyword", text: "Keyword" },
  { value: "volume", text: "Volume" },
  { value: "cpc", text: "CPC" },
  { value: "difficulty", text: "Difficulty" },
  { value: "competition", text: "Competition" },
];
const sortOrderByList = [
  { value: "asc", text: "ASC" },
  { value: "desc", text: "DESC" },
];
// const historyTrendList = [{ value: "true", text: "Track" }];

const Filters = ({ onFiltered }: FilterFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getData = async (data) => {
    return await getSimilarKeywordData(data);
  };

  useEffect(() => {
    const paramsObj = Object.fromEntries(searchParams.entries());

    if (!paramsObj.keyword) return;

    const fetchData = async () => {
      onFiltered(getData(paramsObj));
    };

    fetchData();
  }, [searchParams]);

  const filterForm = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: filterDefaultValues,
  });

  const onSubmit = async (data: z.infer<typeof filterSchema>) => {
    router.push(`similar?${new URLSearchParams(data).toString()}`);
  };

  return (
    <Card className="w-full mb-6">
      <CardContent>
        <Form {...filterForm}>
          <form
            onSubmit={filterForm.handleSubmit(onSubmit)}
            className="flex flex-wrap gap-6"
          >
            <TextField
              label="Keyword"
              className="grow"
              placeholder="Eg: avocado"
              field={filterForm.register("keyword")}
              error={filterForm.formState.errors?.keyword}
            />
            <TextField
              className="grow"
              label="Source (country)"
              placeholder="Ex: us"
              field={filterForm.register("source")}
              error={filterForm.formState.errors?.source}
            />
            <SelectField
              className="grow"
              label="Sort By"
              name="sort"
              selectList={selectList}
              control={filterForm.control}
              field={filterForm.register("sort")}
              error={filterForm.formState.errors?.sort}
            />
            <div className="self-end">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-blue-50 h-10 w-[200px] cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Filters;
