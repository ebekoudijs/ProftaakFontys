import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}