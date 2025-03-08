import { Input } from "../../ui/input";
import { FormFieldProps } from "!@/types/forms";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";

const NameField = ({
    field,
    error,
    placeholder = "Enter full name",
    label = "Full name"
}: FormFieldProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input type="text" placeholder={placeholder} {...field} className="bg-white h-10" />
            </FormControl>
            {error && <FormMessage className="text-red-500">{error.message}</FormMessage>}
        </FormItem>
    )
}

export default NameField;