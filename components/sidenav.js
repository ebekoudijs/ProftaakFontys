import styles from '../styles/sidenav.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Sidenav() {
  return (
      <div className={styles.error}>
          
          <div className={styles.h1}>
              <h1>Grasshopper company</h1>
          </div>
          <div className={styles.links}>
              <ul>
                  <li>
                    <Link href="/">
                      <a>← Home</a>
                    </Link>
                  </li>
                  <li>
                      <Link href="/about">
                          <a>← About</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/pagetemplate">
                          <a>← pagetemplate</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/contact">
                          <a>← Contact</a>
                      </Link>
                  </li>
                </ul>
           </div>
      </div>
  );
}
