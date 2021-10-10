import Link from 'next/link'

import Box from './layout/Box'

export default function Header() {
  return (
    <Box
      as="header"
      css={{
        height: '$7',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      <Link href="/">Home</Link>
    </Box>
  )
}
