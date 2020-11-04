import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from "../components/footer"
import Header from "../components/header"
import Sidenav from "../components/sidenav"

export const name = 'Cricket Blender'
export const siteTitle = 'Cricket Blender'
export const filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Layout({ children, title, nofooter, noheader, nosidenav, nohome}) {
  return (
      <>
    <div className={styles.container}>
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {!noheader ? (
          <Header title={title}/>
        ):

        (<></>)}
      {!nosidenav ? (
        <Sidenav />
        ) :
                  (<></>)}

      <main>{children}</main>

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
//manier vinden voor lege return
<></>)
}
    </>
  )
}