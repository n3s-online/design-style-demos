import { useDesignStyle } from '@/contexts/DesignStyleContext'

export function Footer() {
  const { currentStyle } = useDesignStyle()

  return (
    <footer className={`mt-auto px-6 py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
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
      </div>
    </footer>
  )
}
