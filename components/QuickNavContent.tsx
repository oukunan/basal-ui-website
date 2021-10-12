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
  const [activeHeading, setActiveHeading] = useState<string | null>(null)

  const findActiveHeading = useCallback(() => {
    let active: string | null = null

    for (let i = props.headings.length - 1; i >= 0; i--) {
      // Do not set active heading when the document is nearly top
      if (document.documentElement.scrollTop < 180) {
        active = null
        break
      }

      const item = props.headings[i]

      if (
        item.offsetTop <
        document.documentElement.scrollTop +
          document.documentElement.clientHeight / 9
      ) {
        active = generateAnchorSectionId(item.textContent!)
        break
      }
    }

    setActiveHeading(active)
  }, [props.headings])

  // TODO: throttle `findActiveHeading` function
  useEffect(() => {
    window.addEventListener('scroll', findActiveHeading)
    return () => {
      window.removeEventListener('scroll', findActiveHeading)
    }
  }, [findActiveHeading])

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
            css={{
              paddingLeft: item.tagName === 'H3' ? '$2' : undefined,
            }}
          >
            <Link
              href={`#${generateAnchorSectionId(item.textContent!)}`}
              css={{
                fontWeight:
                  activeHeading === generateAnchorSectionId(item.textContent!)
                    ? '700'
                    : undefined,
              }}
            >
              {item.textContent}
            </Link>
          </ListItem>
        ))}
      </ContainerUL>
    </Box>
  )
}
