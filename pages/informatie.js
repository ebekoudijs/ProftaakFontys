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
                     src="/images/R-goeie1.png"
                     alt="Grafiek 1"
                     width={420}
                     height={267}
                    />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-goeie2.png"
                          alt="Grafiek2"
                          width={420}
                          height={266}
                      />
                  </div>
              </div>
              <div className={styles.row}>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          src="/images/R-goeie3.png"
                          alt="Grafiek 3"
                          width={420}
                          height={267}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-4.png"
                          alt="Grafiek 4"
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
                          alt="Grafiek 5"
                          width={420}
                          height={263}
                      />
                  </div>
                  <div className={styles.column}>
                      <Image
                          quality={100}
                          className={styles.grafiek}
                          src="/images/R-6.png"
                          alt="Grafiek 6"
                          width={420}
                          height={264}
                      />
                  </div>
                  </div>
      </Layout> 
    </>
  )
}