import clsx from "clsx";
import { ComponentProps, useId } from "react";

type InputProps = {
  wrapperClassName?: string;
  inputClassName?: string;
  label: string;
  helpText: string;
} & Omit<ComponentProps<"input">, "className">; // 기본적으로 할당

function Textarea({
  wrapperClassName: passedWrapperClassName,
  inputClassName: passedTextAreaClassName,
  label,
  helpText,
  ...props
}: InputProps) {
  const TextAreaId = useId();
  const wrapperClassName = clsx(
    "border border-gray-300 rounded-md px-4 py-2 focus-width:border-black transition w-full",
    passedWrapperClassName
  );

  const TextAreaClassName = clsx("outline-none w-full resize-none ", passedTextAreaClassName);

  return (
    <div className="flex flex-col items-start self-stretch">
      {/* label */}
      {label && (
        <label htmlFor={TextAreaId} className="mb-1">
          {label}
        </label>
      )}

      {/* textarea */}
      <div className={wrapperClassName}>
        <textarea id={TextAreaId} type="text" className={TextAreaClassName} {...props} />
      </div>

      {/* helpText */}
      {helpText && (
        <small className="text-gray-400 text-xs mt-1 ">{helpText}</small>
      )}

      
    </div>
  );
}

export default Textarea;
