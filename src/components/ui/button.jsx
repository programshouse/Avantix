import { forwardRef, cloneElement } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[var(--color-primary-dark)]",
        accent: "bg-accent text-accent-foreground hover:opacity-90",
        outline: "border border-primary text-primary bg-transparent hover:bg-secondary",
        ghost: "hover:bg-secondary text-foreground",
        muted: "bg-secondary text-secondary-foreground hover:bg-muted",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Button = forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }))
  if (asChild && children) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      ref,
      ...props,
    })
  }
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
