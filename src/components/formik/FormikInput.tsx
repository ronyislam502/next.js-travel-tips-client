"use client";

import { Input } from "@heroui/input";
import { ErrorMessage, Field, FieldProps } from "formik";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  required?: boolean;
}

const FormikInput: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  readOnly = false,
  placeholder,
  defaultValue,
  required = false,
}) => {
  return (
    <div className="flex flex-col flex-grow font-publicSans lg:w-auto w-full">
      <Field name={name}>
        {({ field }: FieldProps) => (
          <>
            <Input
              {...field}
              defaultValue={defaultValue as string}
              id={name}
              label={label}
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              size="sm"
              type={type}
            />
          </>
        )}
      </Field>
      <ErrorMessage className="text-danger" component="p" name={name} />
    </div>
  );
};

export default FormikInput;
