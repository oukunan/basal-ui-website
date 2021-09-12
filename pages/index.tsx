import Link from 'next/link'
import { getAllPosts } from '../lib/mdx'

export default function BlogList() {
  return (
    <div>
      <Link href="/posts/first-post">Go go example page</Link>
    </div>
  )
}
