import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

import "./input.scss";

type Props = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "onChange"
> & {
  placeholder?: string;
  value: string | number;
  error?: boolean;
  helperText?: string;
  className?: string;
};

export default function Input({
  id,
  name,
  placeholder,
  value,
  error = false,
  helperText = "",
  onChange,
  className,
}: Props) {
  return (
    <div className={cn("form-field", className)}>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-field__field"
      />
      {helperText && (
        <p
          className={cn("form-field__helper-text", {
            "form-field__helper-text--error": error,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
