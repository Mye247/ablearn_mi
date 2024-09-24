import clsx from "clsx";
import React, { ComponentProps, useId } from "react";

type InputProps = {
  wrapperClassName?: string;
  inputClassName?: string;
  label: string;
  helpText: string;
} & Omit<ComponentProps<"input">, "className">; // 기본적으로 할당

function Input({
  wrapperClassName: passedWrapperClassName,
  inputClassName: passedInputClassName,
  label,
  helpText,
  ...props
}: InputProps) {
  const inputId = useId();
  const wrapperClassName = clsx(
    "border border-gray-300 rounded-md px-4 py-2 focus-width:border-black transition",
    passedWrapperClassName
  );

  const inputClassName = clsx("outline-none w-full", passedInputClassName);

  return (
    <div className="flex flex-col items-start">
      {/* label */}
      {label && (
        <label htmlFor={inputId} className="mb-1">
          {label}
        </label>
      )}

      {/* input */}
      <div className={wrapperClassName}>
        <input id={inputId} type="text" className={inputClassName} {...props} />
      </div>

      {/* helpText */}
      {helpText && (
        <small className="text-gray-400 text-xs mt-1 ">{helpText}</small>
      )}

      
    </div>
  );
}

export default Input;
