import Link from 'next/link'
import styles from '../components/home.module.css'
import headerStyles from '../components/header.module.css'

function active (props) {
  if (props.store == "active") {
    return("active")
  }
  return("notactive")
}

export default (props) => (
  <div className={headerStyles.header}>
    <div className={styles.wrapperMain}>
      <div className={headerStyles.headerLogo}>
        <a href="/">
          <img src="./logowhite.png" style={{ width: "150px" }}></img>
        </a>
      </div>

      <button className={`${headerStyles.buttonHeader}`}>
        <a href="/support">SUPPORT</a>
      </button>

      <button className={`${headerStyles.buttonHeader}`}>
        <a href="/playnow">PLAY NOW</a>
      </button>

      <button className={`${headerStyles.buttonHeader}`}>
        <a href="/store">STORE</a>
      </button>
    </div>
  </div>
);