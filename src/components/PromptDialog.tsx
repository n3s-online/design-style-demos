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
  const { currentStyle, currentPalette } = useDesignStyle()

  const prompt = generateStylePrompt(currentStyle, currentPalette)

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
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Transform Your Website</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-sm text-gray-600">
            Copy this prompt and paste it into your coding agent to transform your website
            into the <span className="font-semibold">{currentStyle.displayName}</span> style.
          </p>

          <div className="max-h-[400px] overflow-y-auto overflow-x-hidden border border-gray-200 rounded-md bg-gray-50">
            <pre className="text-sm p-4 whitespace-pre-wrap break-words">
              {prompt}
            </pre>
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
