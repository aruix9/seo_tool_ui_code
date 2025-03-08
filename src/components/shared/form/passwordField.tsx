import { FormFieldProps } from "../../../../types/forms"
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"

const PasswordField = ({
    field,
    error,
    placeholder = 'Enter password',
    label = 'Password'
}: FormFieldProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input type="password" placeholder={placeholder} {...field} className="bg-white h-10" />
            </FormControl>
            {error && <FormMessage className="text-red-500">{error.message}</FormMessage>}
        </FormItem>
    )
}

export default PasswordField