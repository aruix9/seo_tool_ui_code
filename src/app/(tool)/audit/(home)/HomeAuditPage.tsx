"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { UrlFormValues, UrlSchema } from "@/schemas/zodAuditSchemas";

const HomeAuditPage = () => {
  const router = useRouter();

  const form = useForm<UrlFormValues>({
    resolver: zodResolver(UrlSchema),
    defaultValues: {
      url: "",
      competitor1: "",
      competitor2: "",
      competitor3: "",
      competitor4: "",
      competitor5: "",
      backlinkTypes: [],
      includeHistoricalData: false,
    },
  });

  const onSubmit = (values: UrlFormValues) => {
    const params = new URLSearchParams();
    params.set("url", values.url);

    Object.entries(values).forEach(([key, value]) => {
      if (key.startsWith("competitor") && value) {
        params.set(key, value as string);
      }
    });

    if (values.backlinkTypes && values.backlinkTypes.length > 0) {
      params.set("backlinkTypes", values.backlinkTypes.join(","));
    }

    params.set(
      "includeHistoricalData",
      values.includeHistoricalData.toString()
    );

    router.push(`audit/summary?${params.toString()}`);
  };

  return (
    <div className="container mx-auto p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {Array.from({ length: 5 }, (_, i) => (
            <FormField
              key={`competitor${i + 1}`}
              control={form.control}
              name={`competitor${i + 1}` as keyof UrlFormValues}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Competitor {i + 1}</FormLabel>
                  <FormControl>
                    <Input placeholder="https://competitor.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          {/* Backlink Types */}
          <div className="space-y-2">
            <FormLabel>Select Backlink Types</FormLabel>
            {["dofollow", "nofollow", "sponsored"].map((type) => (
              <FormField
                key={type}
                control={form.control}
                name="backlinkTypes"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...(field.value || []), type]);
                          } else {
                            field.onChange(
                              (field.value || []).filter((v) => v !== type)
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal capitalize">
                      {type}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          {/* Additional Preference Switch */}
          <FormField
            control={form.control}
            name="includeHistoricalData"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Include historical data</FormLabel>
              </FormItem>
            )}
          />
          <Button type="submit">Start Audit</Button>
        </form>
      </Form>
    </div>
  );
};

export default HomeAuditPage;
