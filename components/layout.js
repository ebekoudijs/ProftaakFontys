import Head from 'next/head'
import styles from '../styles/template/layout.module.css'
import Link from 'next/link'
import Footer from "../components/footer"
import Header from "../components/header"
import Sidenav from "../components/sidenav"
import dynamic from 'next/dynamic'

export const siteTitle = 'Insect Blend'


const DarkMode = dynamic(() => import('../components/darkmode'), {
    ssr: false
})


export default function Layout({ children, title, nofooter, noheader, nosidenav, nohome}) {

    return (
    <div className={styles.container} id="container">
      <Head>
                <link rel="icon" href="/favicon.ico" />       
                <title>{siteTitle} | {title}</title>
      
      </Head>

      {!nosidenav ? (<Sidenav />) : (<></>)}
      <div className={styles.contentwrapper}>
        <div className={styles.content}>
          {!noheader ? (<Header title={title} />) : (<></>)}
          {children}
          {!nohome && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Terug naar home</a>
            </Link>             
          </div>)}
        </div>
      </div>
            {!nofooter ? (<Footer />) : (<></>)}

            
            
    </div>
  )
}
//<DarkMode />
