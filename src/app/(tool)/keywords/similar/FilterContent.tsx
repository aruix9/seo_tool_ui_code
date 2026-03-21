import { z } from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

import { Form } from "@/components/ui/form";
import { getSimilarKeywordData } from "@/lib/actions/audit/auditActions";
import { filterDefaultValues, filterSchemaObject } from "../SchemaFilters";
import TextField from "@/components/shared/form/textField";
import SelectField from "@/components/shared/form/selectField";
import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn, ChartNoAxesCombined } from "lucide-react";


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

const FilterContent = ({ onFiltered }: FilterFormProps) => {
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
        <div
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <div className="flex gap-4 items-end">
                <Form {...filterForm}>
                    <form
                        onSubmit={filterForm.handleSubmit(onSubmit)}
                        className="flex flex-wrap gap-6 w-full"
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
                        {/* <SelectField
                            className="grow"
                            label="Sort By"
                            name="sort"
                            selectList={selectList}
                            control={filterForm.control}
                            field={filterForm.register("sort")}
                            error={filterForm.formState.errors?.sort}
                        /> */}
                        <div className="self-end">
                            <Button type="submit" size="lg" className="bg-primary text-blue-50 h-10 w-[200px] cursor-pointer">
                                <ChartNoAxesCombined />
                                Analytics
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default FilterContent
