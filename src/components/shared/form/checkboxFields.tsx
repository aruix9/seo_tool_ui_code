"use client";

import { Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

interface CheckboxOption {
  value: string;
  text: string;
}

interface CheckboxGroupProps {
  control: any;
  name: string;
  label?: string;
  defaultValue?: string;
  options: CheckboxOption[];
  className?: string;
}

const CheckboxGroupField = ({
  control,
  name,
  label,
  options,
  className,
  defaultValue,
}: CheckboxGroupProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? false}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <div className={className}>
              {options.map((option) => {
                return (
                  <div className="flex items-center gap-3" key={option.value}>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(isChecked) => {
                        if (isChecked) {
                          field.onChange([
                            ...(field.value || []),
                            option.value,
                          ]);
                        } else {
                          field.onChange(
                            field.value.filter(
                              (v: string) => v !== option.value
                            )
                          );
                        }
                      }}
                      id={`${name}-${option.value}`}
                    />

                    <Label htmlFor={`${name}-${option.value}`}>
                      {option.text}
                    </Label>
                  </div>
                );
              })}
            </div>
          </FormControl>

          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default CheckboxGroupField;
