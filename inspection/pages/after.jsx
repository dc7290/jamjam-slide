import 'lazysizes'

import { processer } from 'microcms-richedit-processer'

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
  return <Content body={body} />
}

export default AfterPage
