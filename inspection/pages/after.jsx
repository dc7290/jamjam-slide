import 'lazysizes'

import { processer } from 'microcms-richedit-processer'
import Head from 'next/head'

import getContent from '../utils/getContent'
import Content from '../components/Content'

export const getStaticProps = async () => {
  const body = await processer(await getContent(), { code: { enabled: true } })

  return {
    props: {
      body,
    },
  }
}

const AfterPage = ({ body }) => {
  return (
    <>
      <Head>
        <title>最適化後</title>
        <meta
          name="description"
          content="ジャムジャム！！Jamstack の登壇スライド 最適化前後の比較資料"
        />
      </Head>
      <Content body={body} />
    </>
  )
}

export default AfterPage
