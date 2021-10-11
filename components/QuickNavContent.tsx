import { useState, useEffect, useCallback } from 'react'
import { styled } from '../stitches.config'

import Link from './Link'
import Box from './layout/Box'
import { generateAnchorSectionId } from '../lib/anchorSection'

type QuickNavContentProps = {
  headings: HTMLHeadingElement[]
}

const ContainerUL = styled('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

const ListItem = styled('li')

export default function QuickNavContent(props: QuickNavContentProps) {
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
        {props.headings.map((item, index) => (
          <ListItem
            key={index}
            css={{ paddingLeft: item.tagName === 'H3' ? '$2' : undefined }}
          >
            <Link href={`#${generateAnchorSectionId(item.textContent!)}`}>
              {item.textContent}
            </Link>
          </ListItem>
        ))}
      </ContainerUL>
    </Box>
  )
}
