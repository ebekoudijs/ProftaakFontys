import styles from '../styles/sidenav.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Sidenav() {
  return (
      <div class={styles.navbar}>
          <div class={styles.logo}>
              Vieze insecten proftaak
          </div>
          <div class="menu">
              <a href="#" class={styles.link}>
                  <div class="title">About</div>
                  <div class="bar"></div>
              </a>
              <a href="#" class={styles.link}>
                  <div class="title">Work</div>
                  <div class="bar"></div>
              </a>
              <a href="#" class={styles.link}>
                  <div class="title">Contact</div>
                  <div class="bar"></div>
              </a>
          </div>
      </div>
  );
}
