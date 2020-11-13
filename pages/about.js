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
                  <p>Wij zijn Insectblend, een bedrijf dat zich specialiseert op het vermalen en verwerken van insecten in maaltijden. Hierdoor hopen we de opwarming van de aarde en het verbruik van water te verminderen. Zelf verkopen wij dan ook insecten en blenders gefocust op het vermalen van insecten. Deze blenders komen geleverd met een aantal ingebouwde standen voor normaal eten en voor insecten. </p>
                  <Image
                      src="/images/philip.png"
                      alt="Groepsfoto van ons team"
                      width={500}
                      height={500}
                  />
        </section>
      </Layout> 
    </>
  )
}