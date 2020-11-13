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
                          quality={100}
                     className={styles.grafiek}
                     src="/images/R-1.png"
                     alt="Picture of the author"
                     width={420}
                     height={267}
                    />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-2.png"
                          alt="Picture of the author"
                          width={420}
                          height={266}
                      />
                  </div>
              </div>
              <div className={styles.row}>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          layout="fill"
                          src="/images/R-3.png"
                          alt="Picture of the author"
                          width={420}
                          height={267}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-4.png"
                          alt="Picture of the author"
                          width={420}
                          height={264}
                      />
                  </div>
              </div>
              <div className={styles.row}>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-5.png"
                          alt="Picture of the author"
                          width={420}
                          height={263}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-6.png"
                          alt="Picture of the author"
                          width={420}
                          height={264}
                      />
                  </div>


                  </div>
      </Layout> 
    </>
  )
}