import { Input } from "../../ui/input";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { FormFieldProps } from "../../../../types/forms";

const EmailField = ({
    field,
    error,
    placeholder = "Enter email or username",
    label = "Email / Username"
}: FormFieldProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input type="email" placeholder={placeholder} {...field} className="bg-white h-10" />
            </FormControl>
            {error && <FormMessage className="text-red-500">{error.message}</FormMessage>}
        </FormItem>
    )
}

export default EmailField;