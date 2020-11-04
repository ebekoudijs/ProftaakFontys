import Link from 'next/link'
import Head from 'next/head'
import Layout, {filler} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function FirstPost() {
  return (
    <>
    <Layout header footer>
      <Head>
      </Head>
        <section className={utilStyles.headingMd}>
        <p>{filler}</p>
      </section>
    </Layout> 
    </>
  )
}