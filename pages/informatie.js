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
              <p>Uit onderzoek blijkt dat het gebruik van rundvlees erg veel water en veevoer kost. Ook stoot het gigantisch veel Co2 uit vergeleken met varkens en kippen. Het is dus logisch om van rundvlees af te stappen. Wij zijn er van overtuigd dat deze twee types vlees alsnog te veel kosten en ook te veel uitstoten, het is een beter idee om helemaal over te stappen naar insecten zoals sprinkhanen. Sprinkhanen kosten namelijk nog geen 500 liter water per kg, kosten maar ongeveer 2,5 kg veevoer per kg en stoten nog geen halve kg Co2 uit per kg. De ander genoemde vleestypes schieten hier ruim boven.</p>
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
              </div>
              <p>Wanneer klanten bij ons een product bestellen vragen wij hen om een enquete in te vullen met de hoeveelheid vlees en insecten die ze gemiddeld per week eten. Na een maand vragen we ze weer om deze enquete in te vullen. Hier zijn de volgende resultaten uit gekomen:</p>
              <div className={styles.row}>
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
                  </div>
                  <div className={styles.row}>
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