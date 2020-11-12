import Link from 'next/link'
import Head from 'next/head'
import Layout, {filler} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from "../styles/informatie.module.css"
const pageTitle = "Informatie"
import Image from 'next/image'


export default function FirstPost() {
  return (
    <>
          <Layout title={pageTitle}>
              <div className={styles.row}>
                  <div className={styles.column }>
                    <Image
                     className={styles.grafiek}
                     src="/images/R-1.png"
                     alt="Picture of the author"
                     width={400}
                     height={400}
                    />
                  </div>
                  <div className={styles.column}>
                      <Image
                          className={styles.grafiek}
                          src="/images/R-2.png"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                          quality="100"
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          className={styles.grafiek}
                          src="/images/R-3.png"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          className={styles.grafiek}
                          src="/images/R-4.png"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          className={styles.grafiek}
                          src="/images/R-5.png"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          className={styles.grafiek}
                          src="/images/R-6.png"
                          alt="Picture of the author"
                          width={400}
                          height={400}
                      />
                  </div>


                  </div>
      </Layout> 
    </>
  )
}