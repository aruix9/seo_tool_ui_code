"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import TextField from "@/components/shared/form/textField";
import { filterDefaultValues, filterSchemaObject } from "./SchemaFilters";
import SelectField from "@/components/shared/form/selectField";
import { Button } from "@/components/ui/button";
import { getAiOverviewData } from "@/lib/actions/audit/auditActions";

type FilterFormProps = {
  onFiltered: (data: any) => void;
};

const scopeList = [
  { value: "base_domain", text: "Base Domain" },
  { value: "domain", text: "Domain" },
  { value: "url", text: "URL" },
];

const engineList = [
  { value: "ai-overview", text: "AI Overview" },
  { value: "chatgpt", text: "ChatGPT" },
  { value: "perplexity", text: "Perplexity" },
  { value: "gemini", text: "Gemini" },
  { value: "ai-mode", text: "AI Mode" },
];

const filterSchema = z.object(filterSchemaObject);

const Filters = ({ onFiltered }: FilterFormProps) => {
  const filterForm = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: filterDefaultValues,
  });

  const onSubmit = async (data: z.infer<typeof filterSchema>) => {
    const aiOverviewResponse = await getAiOverviewData(data);
    onFiltered(aiOverviewResponse);
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
              label="Source"
              className="grow"
              placeholder="Eg: us"
              field={filterForm.register("source")}
              error={filterForm.formState.errors?.source}
            />
            <SelectField
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
              label="Engine"
              name="engine"
              className="grow"
              defaultValue="ai-overview"
              selectList={engineList}
              control={filterForm.control}
              field={filterForm.register("engine")}
              error={filterForm.formState.errors?.engine}
            />
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
