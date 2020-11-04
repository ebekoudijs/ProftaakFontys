import headerstyle from '../styles/footer.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Header({title}) {
  return (
      <>
      <p>{}</p>
      <header className={headerstyle.header}>
        <h1 className={utilStyles.heading2Xl}>{title}</h1>
      </header>
      </>
  );
}
