import styles from '../styles/sidenav.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Sidenav() {
  return (
      <div className={styles.navbarcontainer} id="navbarcontainer">
          <div className={styles.logo}>
              <Link href="/">
                  Insect Blend
              </Link>
          </div>
          <div className="menu">
              <Link href="/about">
              <a className={styles.link} >
                  <div className={styles.title}>About</div>
                  <div className={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/contact">
                  <a className={styles.link}>
                      <div className={styles.title}>Contact</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/calculator">
                  <a className={styles.link}>
                      <div className={styles.title}>calculator</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/documentatie">
                  <a className={styles.link}>
                      <div className={styles.title}>Documentatie</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
          </div>
      </div>
  );
}
