import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllFrontmatter, getMdxBySlug } from '../../../lib/mdx'
import { components } from '../../../components/MDXcomponents'
import MetaHead from '../../../components/MetaHead'
import QuickNavContent from '../../../components/QuickNavContent'
import Box from '../../../components/layout/Box'

type Props = {
  frontmatter: { title: string; description: string }
  code: string
}

export default function OverviewDocs(props: Props) {
  const Component = useMemo(() => getMDXComponent(props.code), [props.code])

  return (
    <Box
      css={{
        display: 'flex',
      }}
    >
      <MetaHead title={props.frontmatter.title} />
      <Box css={{ flexGrow: 1, maxWidth: '800px', margin: '0 auto' }}>
        <Component components={components as any} />
      </Box>
      <QuickNavContent />
    </Box>
  )
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug(
    'components/',
    context.params.slug
  )
  return { props: { frontmatter, code } }
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('components/')

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('components/', '') },
    })),
    fallback: false,
  }
}
