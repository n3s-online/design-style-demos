import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { getAvailableStyles, getDesignStyle } from '@/styles/design-styles'
import type { DesignStyleName } from '@/types/design-style'
import { cn } from '@/lib/utils'

interface StyleSelectorDialogProps {
  triggerClassName?: string
}

export function StyleSelectorDialog({ triggerClassName }: StyleSelectorDialogProps) {
  const [open, setOpen] = useState(false)
  const { styleName, setStyleName } = useDesignStyle()
  const availableStyles = getAvailableStyles()

  const handleStyleSelect = (name: DesignStyleName) => {
    setStyleName(name)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>
        Change Style
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select a Design Style</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {availableStyles.map((style) => {
            const isSelected = styleName === style.name
            const styleConfig = getDesignStyle(style.name)

            return (
              <button
                key={style.name}
                onClick={() => handleStyleSelect(style.name)}
                className={cn(
                  'px-6 py-4 text-lg',
                  styleConfig.button.base,
                  isSelected ? styleConfig.button.selected : styleConfig.button.unselected
                )}
              >
                {style.displayName}
                {isSelected && (
                  <span className="ml-2 text-sm">✓</span>
                )}
              </button>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
