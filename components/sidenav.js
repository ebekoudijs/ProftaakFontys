import styles from '../styles/sidenav.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Sidenav() {
  return (
      <div class={styles.header}>
          <div class={styles.logo }>
              Insecten bedrijf dingen
          </div>
          <div class="menu">
              <a href="#" class={styles.link}>
                  <div class={styles.title}>About</div>
                  <div class={styles.bar}></div>
              </a>
              <a href="#" class={styles.link}>
                  <div class={styles.title}>Work</div>
                  <div class={styles.bar}></div>
              </a>
              <a href="#" class={styles.link}>
                  <div class={styles.title}>Contact</div>
                  <div class={styles.bar}></div>
              </a>
          </div>
      </div>
  );
}
