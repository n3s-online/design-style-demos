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
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-base mb-2">What is this?</h3>
              <p>
                Design Style Demos is an interactive showcase of different design aesthetics applied
                to the same business dashboard. Each style demonstrates how design choices create
                unique visual experiences while maintaining functionality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">What problem does it solve?</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <span className="font-medium">Visual Reference:</span> See how different design styles
                  (Neobrutalism, Art Deco, Glassmorphism, etc.) look in practice
                </li>
                <li>
                  <span className="font-medium">Design Exploration:</span> Explore and compare various
                  aesthetics to find inspiration for your projects
                </li>
                <li>
                  <span className="font-medium">Quick Transformation:</span> Use the "Get Prompt" feature
                  to transform your own website into any of these styles using AI coding agents
                </li>
                <li>
                  <span className="font-medium">Learning Tool:</span> Understand the characteristics,
                  color palettes, and typography choices that define each design movement
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">How to use it</h3>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Use the <span className="font-semibold">"Change Style"</span> button to switch between different design aesthetics</li>
                <li>Explore the same dashboard components styled differently in each theme</li>
                <li>Click <span className="font-semibold">"Get Prompt"</span> to copy AI prompts for transforming your own website</li>
                <li>Learn from the implementation to apply these styles in your projects</li>
              </ol>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className={cn(
              'px-6 py-3 text-base font-semibold transition-all mt-2',
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
