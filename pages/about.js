//import Link from 'next/link'
import Head from 'next/head'
import Layout, {filler} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
const pageTitle = "Over ons"


export default function FirstPost() {
  return (
    <>
      <Layout title={pageTitle}>
        <Head>
        </Head>
              <section className={utilStyles.headingMd}>
                  <Image
                      src="/images/philip.png"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                  />
        </section>
      </Layout> 
    </>
  )
}