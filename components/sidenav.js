import styles from '../styles/sidenav.module.css'
import utilStyles from '../styles/utils.module.css'



export default function Sidenav() {
  return (
      <div className={styles.error}>
          
          <div className={styles.h1}>
              <h1>Grasshopper company</h1>
          </div>
          <div className={styles.links}>
              <ul>
                  <li><a href="/about">
                      About</a>
                         About</li>
                  <li><a href="/">
                      Index</a>
   Index</li>
                  <li><a href="/pagetemplate">
                      Pagetemplate</a>
   pagetemplate</li>
              </ul>
          </div>
      </div>
  );
}
