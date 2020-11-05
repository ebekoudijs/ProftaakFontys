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
              <Link href="/about">
              <a class={styles.link}>
                  <div class={styles.title}>About</div>
                  <div class={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/contact">
                  <a class={styles.link}>
                      <div class={styles.title}>Contact</div>
                      <div class={styles.bar}></div>
                  </a>
              </Link>
              <Link href="/pagetemplate">
                  <a class={styles.link}>
                      <div class={styles.title}>Template</div>
                      <div class={styles.bar}></div>
                  </a>
              </Link>
          </div>
      </div>
  );
}
