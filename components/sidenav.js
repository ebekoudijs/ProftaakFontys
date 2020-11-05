import styles from '../styles/sidenav.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Sidenav() {
  return (
      <div className={styles.header}>
          <div className={styles.logo }>
              Insecten bedrijf dingen
          </div>
          <div className="menu">
              <Link href="/about">
              <a className={styles.link}>
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
              <Link href="/philipstroep">
                  <a className={styles.link}>
                      <div className={styles.title}>Philip's troep</div>
                      <div className={styles.bar}></div>
                  </a>
              </Link>
          </div>
      </div>
  );
}
