import Head from 'next/head'

type MetaHeadProps = {
  title: string
}

export default function MetaHead(props: MetaHeadProps) {
  const title = `${props.title} - Basal UI`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  )
}
