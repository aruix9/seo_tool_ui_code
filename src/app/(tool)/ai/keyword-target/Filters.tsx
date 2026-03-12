"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TextField from "@/components/shared/form/textField";
import { filterDefaultValues, filterSchemaObject } from "./SchemaFilters";
import SelectField from "@/components/shared/form/selectField";
import { getAiKeywordsByTargetData } from "@/lib/actions/audit/auditActions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type FilterFormProps = {
  onFiltered: (data: any) => void;
};

const scopeList = [
  { value: "base_domain", text: "Base Domain" },
  { value: "domain", text: "Domain" },
  { value: "url", text: "URL" },
];

const sortList = [
  { value: "volume", text: "Volume" },
  { value: "type", text: "Type" },
  { value: "snippet_length", text: "Snippet Length" },
];

const filterSchema = z.object(filterSchemaObject);

const Filters = ({ onFiltered }: FilterFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getData = async (data) => {
    return await getAiKeywordsByTargetData(data);
  };

  useEffect(() => {
    const paramsObj = Object.fromEntries(searchParams.entries());

    if (!paramsObj.target) return;

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
    router.push(`keyword-target?${new URLSearchParams(data).toString()}`);
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
              label="Target"
              className="grow"
              placeholder="Eg: example.com"
              field={filterForm.register("target")}
              error={filterForm.formState.errors?.target}
            />
            <TextField
              label="Source (country)"
              className="grow"
              placeholder="Eg: us"
              field={filterForm.register("source")}
              error={filterForm.formState.errors?.source}
            />
            {/* <SelectField
              label="Scope"
              name="scope"
              className="grow"
              defaultValue="domain"
              selectList={scopeList}
              control={filterForm.control}
              field={filterForm.register("scope")}
              error={filterForm.formState.errors?.scope}
            />
            <SelectField
              label="Sort"
              name="sort"
              className="grow"
              defaultValue="volume"
              selectList={sortList}
              control={filterForm.control}
              field={filterForm.register("sort")}
              error={filterForm.formState.errors?.sort}
            /> */}
            <div className="grow self-end">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-blue-50 h-10 w-full cursor-pointer"
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
