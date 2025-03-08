import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface FormFieldProps {
    field: UseFormRegisterReturn;
    placeholder?: string;
    label?: string;
    error?: FieldError;
  }