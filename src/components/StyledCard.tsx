import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

interface StyledCardProps {
  title: string
  content: string
  className?: string
}

/**
 * Styled Card Component
 * Automatically adapts to the current design style from context
 */
export function StyledCard({ title, content, className }: StyledCardProps) {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn('p-8', currentStyle.card.container, className)}>
      <h2 className={cn('mb-4', currentStyle.card.title)}>{title}</h2>
      <p className={currentStyle.card.content}>{content}</p>
    </div>
  )
}
