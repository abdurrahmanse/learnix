import * as React from "react"
import { cn } from "../utils"

// -----------------------------------------------------------------------------
// Section
// -----------------------------------------------------------------------------

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Comp = "section", ...props }, ref) => {
    return (
      <Comp
        ref={ref as any}
        className={cn("py-8 md:py-12 lg:py-16", className)}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

// -----------------------------------------------------------------------------
// Grid
// -----------------------------------------------------------------------------

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 2 | 4 | 6 | 8 | 10 | 12
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          {
            "grid-cols-1": cols === 1,
            "grid-cols-1 sm:grid-cols-2": cols === 2,
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": cols === 3,
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5": cols === 5,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6": cols === 6,
            "grid-cols-12": cols === 12,
            "gap-2": gap === 2,
            "gap-4": gap === 4,
            "gap-6": gap === 6,
            "gap-8": gap === 8,
            "gap-10": gap === 10,
            "gap-12": gap === 12,
          },
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"

export { Section, Grid }
