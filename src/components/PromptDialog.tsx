import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { generateStylePrompt } from '@/lib/generate-style-prompt'
import { cn } from '@/lib/utils'

interface PromptDialogProps {
  triggerClassName?: string
}

export function PromptDialog({ triggerClassName }: PromptDialogProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { currentStyle } = useDesignStyle()

  const prompt = generateStylePrompt(currentStyle)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>
        Get Prompt
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Transform Your Website</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4 flex-1 overflow-hidden">
          <p className="text-sm text-gray-600">
            Copy this prompt and paste it into your coding agent to transform your website
            into the <span className="font-semibold">{currentStyle.displayName}</span> style.
          </p>

          <div className="relative flex-1 overflow-hidden flex flex-col">
            <div className="absolute inset-0 overflow-auto">
              <pre className="text-sm bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-wrap break-words">
                {prompt}
              </pre>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={cn(
              'px-6 py-3 text-base font-semibold transition-all',
              currentStyle.button.base,
              currentStyle.button.selected
            )}
          >
            {copied ? '✓ Copied!' : 'Copy Prompt'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
