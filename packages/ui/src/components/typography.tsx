import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

// -----------------------------------------------------------------------------
// Heading
// -----------------------------------------------------------------------------

const headingVariants = cva("font-bold tracking-tight text-foreground", {
  variants: {
    level: {
      1: "text-4xl md:text-5xl lg:text-6xl",
      2: "text-3xl md:text-4xl",
      3: "text-2xl md:text-3xl",
      4: "text-xl md:text-2xl",
      5: "text-lg md:text-xl",
      6: "text-base md:text-lg",
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, ...props }, ref) => {
    const Comp = as || `h${level || 1}` as any
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

// -----------------------------------------------------------------------------
// Text
// -----------------------------------------------------------------------------

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-base leading-7",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, as = "p", ...props }, ref) => {
    const Comp = as
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Heading, Text, headingVariants, textVariants }
