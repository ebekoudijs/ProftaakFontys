import headerstyle from '../styles/header.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Header({title}) {
  return (
       <div className={headerstyle.header}>
        <h1 className={utilStyles.heading2Xl}>{title}</h1>
      </div>

  );
}
