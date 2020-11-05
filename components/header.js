import headerstyle from '../styles/header.module.css'

export default function Header({title}) {
  return (
      <div className={headerstyle.headerdiv}>
        <h1 className={headerstyle.header}>{title}</h1>
      </div>
  );
}
