import Head from 'next/head'
import styles from '../styles/template/layout.module.css'
import Link from 'next/link'
import Footer from "../components/footer"
import Header from "../components/header"
import Sidenav from "../components/sidenav"
import dynamic from 'next/dynamic'

export const siteTitle = 'Insect Blend'
export const filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const DarkMode = dynamic(() => import('../components/darkmode'), {
    ssr: false
})

export default function Layout({ children, title, nofooter, noheader, nosidenav, nohome}) {

    return (
    <div className={styles.container}>
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
              <a>← Back to home</a>
            </Link>             
          </div>)}
        </div>
      </div>
      {!nofooter ? (<Footer />) : (<></>)}
      <DarkMode />
    </div>
  )
}

//IDs toevoegen aan de components
//Get element by ID op components
//Dark mode class toevoegen aan de components
//de css togglen voor deze components