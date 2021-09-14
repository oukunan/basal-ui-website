import React from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { getAllFrontmatter, getMdxBySlug } from '../../../lib/mdx'

type Props = {
  frontmatter: any
  code: string
}

export default function OverviewDocs(props: Props) {
  const Component = React.useMemo(
    () => getMDXComponent(props.code),
    [props.code]
  )

  return (
    <>
      <Component />
    </>
  )
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug(
    'overview/',
    context.params.slug
  )
  return { props: { frontmatter, code } }
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('overview/')

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('overview/', '') },
    })),
    fallback: false,
  }
}
