import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import rehypeMetaAttributes from './rehype-meta-attributes'
import remarkDemoComponent from './remark-demo-component'

const ROOT_PATH = path.join(process.cwd(), 'data')

export function getSourceOfFile(fileName) {
  return fs.readFileSync(path.join(ROOT_PATH, fileName))
}

export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(ROOT_PATH, fromPath)
  const paths = glob.sync(`${PATH}/**/*.mdx`)

  return paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), 'utf8')
    const { data } = matter(source)

    return {
      ...data,
      slug: filePath.replace(`${ROOT_PATH}/`, '').replace('.mdx', ''),
    }
  })
}

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const source = fs.readFileSync(
    path.join(ROOT_PATH, basePath, `${slug}.mdx`),
    'utf8'
  )
  const { frontmatter, code } = await bundleMDX(source, {
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkDemoComponent,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttributes,
      ]

      return options
    },
  })

  return {
    frontmatter: {
      ...frontmatter,
      slug,
    },
    code,
  }
}

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + '.mdx') as any

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: ROOT_PATH,
  })

  return {
    frontmatter,
    code,
  }
}

export const getTest = () => {
  return { frontmaatter: {}, slug: '' }
}
