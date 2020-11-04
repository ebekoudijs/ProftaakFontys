import styles from '../styles/sidenav.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Sidenav() {
  return (
      <div className={styles.navbar}>
          
          <div className={styles.logocontainer}>
              <h1>Grasshopper company</h1>
          </div>
          <div className={styles.navitemcontainer}>
              <ul>
                  <li>
                  <div className={styles.navitem}>
                      <Link href="/">
                        <a>← Home</a>
                          </Link>
                          <hr className={utilStyles.divider}></hr>
                      </div>
                  </li>
                  <div className={styles.navitem}>
                      <li>
                          <Link href="/about">
                              <a>← About</a>
                          </Link>
                          <hr className={utilStyles.divider}></hr>
                      </li>
                  </div>
                  <div className={styles.navitem}>
                      <li>
                          <Link href="/pagetemplate">
                              <a>← Template</a>
                          </Link>
                          <hr className={utilStyles.divider}></hr>
                      </li>
                  </div>
                  <div className={styles.navitem}>
                      <li>
                          <Link href="/contact">
                              <a>← Contact</a>
                          </Link>
                      </li>
                  </div>
                </ul>
           </div>
      </div>
  );
}
