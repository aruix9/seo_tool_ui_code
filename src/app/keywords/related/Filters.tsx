"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TextField from "@/components/shared/form/textField";
import NumberField from "@/components/shared/form/numberField";
import SelectField from "@/components/shared/form/selectField";
import RadioBtnFields from "@/components/shared/form/radioFields";
import CheckboxGroupField from "@/components/shared/form/checkboxFields";
import { getRelatedKeywordData } from "@/lib/actions/audit/auditActions";
import { filterDefaultValues, filterSchemaObject } from "../SchemaFilters";

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
const historyTrendList = [{ value: "true", text: "Track" }];

const Filters = ({ onFiltered }: FilterFormProps) => {
  const filterForm = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: filterDefaultValues,
  });

  const onSubmit = async (data: z.infer<typeof filterSchema>) => {
    const summaryResponse = await getRelatedKeywordData(data);
    onFiltered(summaryResponse);
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
              placeholder="Eg: avocado"
              field={filterForm.register("keyword")}
              error={filterForm.formState.errors?.keyword}
            />
            <TextField
              label="Source"
              placeholder="Ex: us"
              field={filterForm.register("source")}
              error={filterForm.formState.errors?.source}
            />
            <div className="flex gap-6">
              <NumberField
                label="Limit"
                placeholder="10"
                field={filterForm.register("limit")}
                error={filterForm.formState.errors?.limit}
              />
              <NumberField
                label="Offset"
                placeholder="0"
                field={filterForm.register("offset")}
                error={filterForm.formState.errors?.offset}
              />
            </div>
            <div className="flex gap-6">
              <SelectField
                label="Sort By"
                className="grow"
                name="sort"
                selectList={selectList}
                control={filterForm.control}
                field={filterForm.register("sort")}
                error={filterForm.formState.errors?.sort}
              />
              <RadioBtnFields
                name="sortOrder"
                label="Sort Order"
                defaultValue="asc"
                className="grow flex"
                options={sortOrderByList}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="Volume From"
                placeholder="10"
                field={filterForm.register("volumeFrom")}
                error={filterForm.formState.errors?.volumeFrom}
              />
              <NumberField
                label="Volume To"
                placeholder="0"
                field={filterForm.register("volumeTo")}
                error={filterForm.formState.errors?.volumeTo}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="Difficulty From"
                placeholder="10"
                field={filterForm.register("difficultyFrom")}
                error={filterForm.formState.errors?.difficultyFrom}
              />
              <NumberField
                label="Difficulty To"
                placeholder="0"
                field={filterForm.register("difficultyTo")}
                error={filterForm.formState.errors?.difficultyTo}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="CPC From"
                placeholder="10"
                field={filterForm.register("cpcFrom")}
                error={filterForm.formState.errors?.cpcFrom}
              />
              <NumberField
                label="CPC To"
                placeholder="0"
                field={filterForm.register("cpcTo")}
                error={filterForm.formState.errors?.cpcTo}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="Competition From"
                placeholder="10"
                field={filterForm.register("competitionFrom")}
                error={filterForm.formState.errors?.competitionFrom}
              />
              <NumberField
                label="Competition To"
                placeholder="0"
                field={filterForm.register("competitionTo")}
                error={filterForm.formState.errors?.competitionTo}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="Keyword Count From"
                placeholder="10"
                field={filterForm.register("keywordCountFrom")}
                error={filterForm.formState.errors?.keywordCountFrom}
              />
              <NumberField
                label="Keyword Count To"
                placeholder="0"
                field={filterForm.register("keywordCountTo")}
                error={filterForm.formState.errors?.keywordCountTo}
              />
            </div>
            <div className="flex gap-6">
              <NumberField
                label="Characters Count From"
                placeholder="10"
                field={filterForm.register("charactersCountFrom")}
                error={filterForm.formState.errors?.charactersCountFrom}
              />
              <NumberField
                label="Characters Count To"
                placeholder="0"
                field={filterForm.register("charactersCountTo")}
                error={filterForm.formState.errors?.charactersCountTo}
              />
            </div>
            <TextField
              label="Serp Features"
              placeholder="Eg: sge, images"
              field={filterForm.register("serpFeature")}
              error={filterForm.formState.errors?.serpFeature}
            />
            <CheckboxGroupField
              name="historyTrend"
              className="grow flex"
              label="History Trend"
              options={historyTrendList}
              control={filterForm.control}
            />
            <div className="w-full text-right">
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
