import { useCallback, useState, useEffect } from 'react'

import Box from './layout/Box'
import Pre from './Pre'

type CodeBlockProps = {
  className: string
  children: string
}

export default function CodeBlock(props: CodeBlockProps) {
  const [copy, setCopy] = useState(false)

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false)
      }, 1500)
    }
  }, [copy])

  const copyText = useCallback(() => {
    if (copy) {
      return
    }
    navigator.clipboard.writeText(props.children.replace('/\n/g', ''))
    setCopy(true)
  }, [copy, props.children])

  return (
    <Box
      css={{
        position: 'relative',
        padding: '$2 $3',
        backgroundColor: 'lightgray',
        borderRadius: '10px',
      }}
    >
      <Pre>
        <code className={props.className}>{props.children}</code>
      </Pre>

      <Box
        css={{ position: 'absolute', top: '$1', right: '$2' }}
        onClick={copyText}
      >
        {copy ? '✓' : 'Copy'}
      </Box>
    </Box>
  )
}
