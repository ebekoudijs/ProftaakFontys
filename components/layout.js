import Head from 'next/head'
import styles from '../styles/template/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from "../components/footer"
import Header from "../components/header"
import Sidenav from "../components/sidenav"
import headerstyle from '../styles/header.module.css'

export const siteTitle = 'Insect Blend'
export const filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Layout({ children, title, nofooter, noheader, nosidenav, nohome}) {
  return (

    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />       
        <title>{siteTitle} | {title}</title>
      </Head>
      {!noheader ? (
          <Header title={title}/>
        ):

                      (<></>)}
      {!nosidenav ? (
        <Sidenav />
        ) :
                  (<></>)}
          
          <div className={styles.contentwrapper}>
              <div className={styles.content }>
              {children}
                </div>

              {!nohome && (
                <div className={styles.backToHome}>
                  <Link href="/">
                    <a>← Back to home</a>
                  </Link>
                          </div>
                        
              )}
              </div>
    {!nofooter ? (<Footer />)
    :
        (

<></>)
}
      </div>
      





  )
}