import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllPosts, getSinglePost } from '../../lib/mdx'

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <div>
      <h1>{frontmatter.title} 🥲</h1>
      <Component />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}

export default Post
