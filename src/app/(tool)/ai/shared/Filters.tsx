"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextField from "@/components/shared/form/textField";
import { ChartNoAxesCombined } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { filterSchemaObject } from "./SchemaFilters";

type FilterFormProps = {
  currentUrl: string;
  getKeywordData: (body: any) => void;
  setKeywordData: React.Dispatch<React.SetStateAction<any>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const filterSchema = z.object(filterSchemaObject);

const Filters = ({
  currentUrl,
  setKeywordData,
  setIsLoading,
  getKeywordData,
}: FilterFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsObj = Object.fromEntries(searchParams.entries());

  const fetchData = async (paramsObj: { [k: string]: string }) => {
    const response = await getKeywordData(paramsObj);
    setKeywordData(response);
    setIsLoading(false);
    router.push(`${currentUrl}?${new URLSearchParams(paramsObj).toString()}`);
  };

  useEffect(() => {
    if (!paramsObj.target) return;
    fetchData(paramsObj);
  }, []);

  const filterForm = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      target: searchParams.get("target") || "",
      source: searchParams.get("source") || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof filterSchema>) => {
    console.log(data);
    setIsLoading(true);
    fetchData(data);
  };

  return (
    <div className="bg-primary/2 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
      <div className="flex gap-4 items-end">
        <Form {...filterForm}>
          <form
            onSubmit={filterForm.handleSubmit(onSubmit)}
            className="flex flex-wrap gap-6 grow"
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
            <div className="self-end">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-blue-50 h-10 w-[200px] cursor-pointer"
              >
                <ChartNoAxesCombined />
                Analytics
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
