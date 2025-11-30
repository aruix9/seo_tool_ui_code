import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { RadioFieldProps } from "../../../../types/forms";

const RadioBtnFields = ({
  name,
  options,
  defaultValue,
  onChange,
  label,
  className,
  error,
}: RadioFieldProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <RadioGroup
          defaultValue={defaultValue}
          onValueChange={onChange}
          name={name}
          className={className}
        >
          {options.map((item) => (
            <div key={item.value} className="flex items-center gap-3">
              <RadioGroupItem
                id={`${name}-${item.value}`}
                value={item.value}
                key={item.value}
              />
              <Label htmlFor={`${name}-${item.value}`}>{item.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </FormControl>
      {error && (
        <FormMessage className="text-red-500">{error.message}</FormMessage>
      )}
    </FormItem>
  );
};

export default RadioBtnFields;
