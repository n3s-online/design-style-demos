import * as React from 'react'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'
import { TabsContext } from './ui/tabs'

interface StyledTabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const StyledTabTrigger = React.forwardRef<HTMLButtonElement, StyledTabTriggerProps>(
  ({ value, children, ...props }, ref) => {
    const { currentStyle } = useDesignStyle()
    const { activeTab, setActiveTab } = React.useContext(TabsContext)
    const isActive = activeTab === value

    return (
      <button
        ref={ref}
        className={cn(
          currentStyle.tabs.trigger,
          isActive ? currentStyle.tabs.triggerActive : currentStyle.tabs.triggerInactive
        )}
        data-state={isActive ? "active" : "inactive"}
        onClick={() => setActiveTab(value)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
StyledTabTrigger.displayName = "StyledTabTrigger"
