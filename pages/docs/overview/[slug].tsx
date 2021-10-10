import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllFrontmatter, getMdxBySlug } from '../../../lib/mdx'
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
