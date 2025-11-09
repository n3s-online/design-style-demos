import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionItemContextType {
  isOpen: boolean
  toggle: () => void
}

const AccordionItemContext = React.createContext<AccordionItemContextType | undefined>(undefined)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple'
  children: React.ReactNode
}

const Accordion = ({ className, children, ...props }: AccordionProps) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  )
}
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = ({ className, children, ...props }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AccordionItemContext.Provider value={{ isOpen, toggle: () => setIsOpen(!isOpen) }}>
      <div className={cn("border-b", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionItemContext)

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={context?.toggle}
        data-state={context?.isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionItemContext)

    if (!context?.isOpen) return null

    return (
      <div
        ref={ref}
        className={cn("pb-4 pt-0 overflow-hidden text-sm transition-all", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
