import { useState, useEffect } from 'react'

import { styled } from '../stitches.config'
import Box from './layout/Box'
import { generateAnchorSectionId } from '../lib/anchorSection'

const ContainerUL = styled('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

const ListItem = styled('li')

export default function QuickNavContent() {
  const [headers, setHeaders] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const articleHeaders: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll(`[data-heading]`)
    )

    setHeaders(articleHeaders)
  }, [])

  return (
    <Box
      as="aside"
      css={{
        position: 'sticky',
        top: '$8',
        height: '100%',
        width: '220px',
        padding: '0 $4',
      }}
    >
      <h4>Quick Content</h4>
      <ContainerUL>
        {headers.map((item, index) => (
          <ListItem
            key={index}
            css={{ paddingLeft: item.tagName === 'H3' ? '$2' : undefined }}
          >
            <a href={`#${generateAnchorSectionId(item.textContent!)}`}>
              {item.textContent}
            </a>
          </ListItem>
        ))}
      </ContainerUL>
    </Box>
  )
}
