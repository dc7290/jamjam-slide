import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: 'jamjam-inspection',
  apiKey: 'd4e60490-4bcb-4961-b615-05e7ce33d014',
})

const getContent = async () => {
  const { body } = await client.get({ endpoint: 'content' })

  return body
}

export default getContent
