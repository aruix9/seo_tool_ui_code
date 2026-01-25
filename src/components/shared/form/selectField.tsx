import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { SelectFieldProps } from "../../../../types/forms";
import { Controller } from "react-hook-form";

const SelectField = ({
  control,
  error,
  label,
  className,
  name,
  selectList,
  defaultValue,
}: SelectFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue} // ⭐ default value injected here
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select value={field.value}>
              <SelectTrigger className="bg-white h-10 w-full">
                <SelectValue placeholder={selectList[0].text} />
              </SelectTrigger>
              <SelectContent>
                {selectList.map((item) => (
                  <SelectItem value={item.value} key={item.value}>
                    {item.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {error && (
            <FormMessage className="text-red-500">{error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default SelectField;
