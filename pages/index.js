import Head from 'next/head'
import Layout, { siteTitle, filler } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const titel = "Titel"

export default function Home() {
  return (
    <Layout nohome>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{filler}</p>
        <p>{filler}</p>
          <a href="/test">testpagina</a>
      </section>
    </Layout>
  )
}