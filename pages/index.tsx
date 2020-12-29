import Link from 'next/link'
import Layout from '../components/Layout/Layout'
// import 'twin.macro'

import tw, { css, styled, theme } from 'twin.macro'

const IndexPage = () => {
  const x = css({ color: theme('colors.black') })

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p css={[tw`bg-red-300`]}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Input />
    </Layout>
  )
}

const Input = tw.input`border-yellow-100 border hover:border-blue-500`

export default IndexPage
