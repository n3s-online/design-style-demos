import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

interface DemoSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function DemoSection({ title, children, className }: DemoSectionProps) {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn('mb-8', className)}>
      <h2 className={cn('mb-4 text-2xl', currentStyle.card.title)}>{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
