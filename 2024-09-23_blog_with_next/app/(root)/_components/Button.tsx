import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

const buttonVariants = cva(
  "hover:brightness-90 active:brightness-75 rounded-md",
  {
    variants: {
      size: {
        md: "px-2.5 py-1.5  font-semibold",
      },
      intent: {
        primary: "bg-red-500  ",
      },
      outline: {
        true: "bg-white border",
        false: "text-white",
      },
    },
    compoundVariants: [
      {
        outline: true,
        intent: "primary",
        className: "border-black text-black",
      },
    ],
    defaultVariants: {
      size: "md",
      intent: "primary",
      outline: false,
    },
  }
);

type ButtonProps = ButtonVariants & ComponentProps<"button">;
type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
  children,
  intent,
  outline,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ size, intent, outline, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
