import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

interface HowThisWorksDialogProps {
  triggerClassName?: string
}

export function HowThisWorksDialog({ triggerClassName }: HowThisWorksDialogProps) {
  const [open, setOpen] = useState(false)
  const { currentStyle } = useDesignStyle()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>
        How This Works
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Design Style Demos</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Compare different design aesthetics (Neobrutalism, Art Deco, Glassmorphism, etc.)
              applied to the same dashboard components.
            </p>

            <p>
              Switch styles to find inspiration, then use <span className="font-semibold">"Get Prompt"</span> to
              transform your own website using AI coding agents.
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className={cn(
              'px-6 py-3 text-base font-semibold transition-all',
              currentStyle.button.base,
              currentStyle.button.selected
            )}
          >
            Got it!
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
