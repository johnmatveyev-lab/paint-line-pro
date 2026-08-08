import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40":
              variant === "primary",
            "bg-navy-900 hover:bg-navy-800 text-white": variant === "secondary",
            "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white":
              variant === "outline",
            "text-navy-700 hover:bg-navy-100": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
