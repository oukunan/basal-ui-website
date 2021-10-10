import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllFrontmatter, getMdxBySlug } from '../../../lib/mdx'
import { components } from '../../../components/MDXcomponents'
import MetaHead from '../../../components/MetaHead'

type Props = {
  frontmatter: { title: string; description: string }
  code: string
}

export default function OverviewDocs(props: Props) {
  const Component = React.useMemo(
    () => getMDXComponent(props.code),
    [props.code]
  )

  return (
    <>
      <MetaHead title={props.frontmatter.title} />
      <Component components={components as any} />
    </>
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
