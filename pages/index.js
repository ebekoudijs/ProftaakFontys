import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Filler</p>
        <p>
          Filler{' '}
          <a href="/test">testpagina</a>
        </p>
      </section>
    </Layout>
  )
}