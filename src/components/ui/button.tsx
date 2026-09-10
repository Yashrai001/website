import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer shadow-xs hover:shadow-md active:shadow-xs",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-primary/20",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary/10",
        secondary:
          "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:translate-y-0 active:scale-95 shadow-none hover:shadow-none",
        link: "text-primary underline-offset-4 hover:underline hover:translate-y-0 active:scale-100 shadow-none hover:shadow-none",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // We omit Slot and use a standard element since we didn't install @radix-ui/react-slot to save time.
    // If asChild is true, we will just render a span or we can use Slot if we install it.
    // Let's just use a normal button for now as we didn't install radix slot.
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
