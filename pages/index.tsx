import Link from 'next/link'
import tw from 'twin.macro'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js</h1>
      <p css={[tw`bg-red-300`]}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

IndexPage.getLayout = (page: React.FC) => (
  <Layout title="IndexPage">{page}</Layout>
)

export default IndexPage
