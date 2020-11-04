import headerstyle from '../styles/header.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Header({title}) {
  return (
      <div className={headerstyle.headerdiv}>
          <div className={headerstyle.headercontainer}>
              <h1 className={headerstyle.header}>{title}</h1>
          </div>
          <hr className={headerstyle.divider}></hr>
      </div>

  );
}
