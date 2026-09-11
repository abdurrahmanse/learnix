import * as React from "react"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

const linkVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline",
        button: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        nav: "text-muted-foreground hover:bg-muted/80 hover:text-foreground",
        navActive: "bg-primary text-primary-foreground shadow-md shadow-primary/20",
      },
      size: {
        default: "",
        sm: "h-9 px-3 rounded-md",
        md: "h-10 py-2 px-4 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10 rounded-md",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps,
    VariantProps<typeof linkVariants> {
  external?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, external, ...props }, ref) => {
    if (external) {
      return (
        <a
          ref={ref}
          className={cn(linkVariants({ variant, size, className }))}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as any)}
        />
      )
    }

    return (
      <NextLink
        ref={ref}
        className={cn(linkVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
