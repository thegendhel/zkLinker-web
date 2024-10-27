import { cn } from '@/lib/utils'
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import beautify from 'simply-beautiful'

hljs.registerLanguage('json', json)

export const CodeHighlight = ({ code, className }) => {
  //   console.log(beautify)
  const newClass = cn('text-xs font-mono', className)
  return (
    <pre className={newClass}>
      <code className='theme-github-dark'>{beautify.json(code)}</code>
    </pre>
  )
}

export default CodeHighlight
