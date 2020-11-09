import styles from '../styles/sidenav.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Sidenav() {
  return (
      <div className={styles.navbarcontainer} id="navbarcontainer">
          <div className={styles.logodiv}>
              <Link href="/">
                  <a className={styles.logotext}>
                      Insect Blend
                  </a>
              </Link>
          </div>
          <div className="menu">
              <Link href="/about">
              <a className={styles.link} >
                  <div className={styles.title}>Over ons</div>
                  <div className={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/informatie">
                  <a className={styles.link}>
                      <div className={styles.title}>Informatie</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/calculator">
                  <a className={styles.link}>
                      <div className={styles.title}>calculator</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
          </div>
      </div>
  );
}
