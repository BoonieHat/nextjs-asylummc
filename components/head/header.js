import Link from 'next/link'
import headerStyles from '../head/header.module.css'

function active (props) {
  if (props.store == "active") { return("active") }
  return("notactive")
}

export default (props) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.headerLogo}>
        <a href="/">
          <img src="./logowhite.png" style={{ width: "150px" }}></img>
        </a>
      </div>

      <button className={`${headerStyles.buttonHeader}`}>
        <Link href="/play">
          <a>PLAY NOW</a>
        </Link>
      </button>

      <button className={`${headerStyles.buttonHeader}`}>
        <a href="/store">STORE</a>
      </button>
    </div>
  </div>
);