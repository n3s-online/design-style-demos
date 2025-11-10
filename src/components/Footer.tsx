import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { Github } from 'lucide-react'

export function Footer() {
  const { currentStyle } = useDesignStyle()

  return (
    <footer className={`mt-auto px-6 py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <p className={`text-sm ${currentStyle.navbar.text}`}>
          built by{' '}
          <a
            href="https://willness.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold hover:underline ${currentStyle.navbar.text}`}
          >
            willness.dev
          </a>
        </p>
        <a
          href="https://github.com/n3s-online/design-style-demos"
          target="_blank"
          rel="noopener noreferrer"
          className={`${currentStyle.navbar.text} hover:opacity-70 transition-opacity`}
          aria-label="View source on GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}
