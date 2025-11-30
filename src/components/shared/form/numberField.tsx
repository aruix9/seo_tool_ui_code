import { Input } from "../../ui/input";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { FormFieldProps } from "../../../../types/forms";

const NumberField = ({
  field,
  error,
  placeholder,
  label,
  className,
}: FormFieldProps) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder={placeholder}
          {...field}
          className="bg-white h-10"
        />
      </FormControl>
      {error && (
        <FormMessage className="text-red-500">{error.message}</FormMessage>
      )}
    </FormItem>
  );
};

export default NumberField;
