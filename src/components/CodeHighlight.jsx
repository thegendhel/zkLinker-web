import { cn } from '@/lib/utils'
import 'highlight.js/styles/github-dark.css'
import beautify from 'simply-beautiful'
import Highlight from 'react-highlight'
import { CopyButton } from '@/components/copy-button'

export const CodeHighlight = ({ code, className }) => {
  const newClass = cn('text-xs font-mono hljs relative', className)
  return (
    <div className={newClass}>
      <CopyButton value={beautify.json(code)} className="fixed right-12 top-16" />
      <Highlight language='json'>{beautify.json(code)}</Highlight>
    </div>
  )
}

export default CodeHighlight
