import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface FormFieldProps {
  field: UseFormRegisterReturn;
  className?: string;
  placeholder?: string;
  label?: string;
  error?: FieldError;
}

export interface CheckoutFormProps {
  email: string;
  name: string;
  street: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  phone: string;
  ccName: string;
  ccNumber: string;
  ccExpiry: string;
  ccCVV: string;
}

type SelectListType = {
  value: string;
  text: string;
};

export interface SelectFieldProps {
  control: any;
  name: string;
  field: UseFormRegisterReturn;
  className?: string;
  label?: string;
  error?: FieldError;
  selectList: SelectListType[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

type Option = {
  text: string;
  value: string;
};

export interface RadioFieldProps {
  name: string;
  options: Option[];
  defaultValue?: string;
  label?: string;
  className?: string;
  error?: FieldError;
  onChange?: (value: string) => void;
}
