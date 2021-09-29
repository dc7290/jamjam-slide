import cheerio from 'cheerio'
import hljs from 'highlight.js'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import getContent from '../utils/getContent'
import Content from '../components/Content'

export const getStaticProps = async () => {
  const body = await getContent()

  return {
    props: {
      body,
    },
  }
}

const BeforePage = ({ body }) => {
  const [processedBody, setProcessedBody] = useState(body)
  useEffect(() => {
    const $ = cheerio.load(body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    setProcessedBody($.html())
  }, [body])

  return (
    <>
      <Head>
        <title>最適化前</title>
        <meta
          name="description"
          content="ジャムジャム！！Jamstack の登壇スライド 最適化前後の比較資料"
        />
      </Head>
      <Content body={processedBody} />
    </>
  )
}

export default BeforePage
