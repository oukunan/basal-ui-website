import Link from 'next/link'

export default function BlogList() {
  return (
    <div>
      <Link href="/docs/overview/introduction" passHref>
        Go go docs page
      </Link>
    </div>
  )
}
