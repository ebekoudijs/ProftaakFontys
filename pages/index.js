import Head from 'next/head'
import Layout, { siteTitle, filler } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const pageTitle = "Home page"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout nohome noheader title={pageTitle}>
      <section className={utilStyles.headingMd}>
        <p>{filler}</p>
              <p>{filler}</p>
              <Link href="/about">
                  <a>← Naar testpagina</a>
              </Link>
      </section>
    </Layout>
  )
}