import Head from 'next/head'
import Layout, { siteTitle, filler } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const pageTitle = "INDEX"

export default function Home() {
  return (
    <Layout nohome title={pageTitle}>
      <Head>
        <title>{siteTitle} | {pageTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{filler}</p>
        <p>{filler}</p>
          <a href="/test">testpagina</a>
      </section>
    </Layout>
  )
}