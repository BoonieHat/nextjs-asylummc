import Link from 'next/link'
import styles from '../components/home.module.css'

function active (props) {
  if (props.store == "active") {
    return("active")
  }
  return("notactive")
}

export default (props) => (
  <div className={styles.header}>
    <div className={styles.wrapperMain}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img src="./logowhite.png" style={{ width: "150px" }}></img>
        </a>
      </div>

      <button className={`${styles.buttonHeader} ${styles.mr1rem}`}>
        <a href="/support">SUPPORT</a>
      </button>

      <button className={`${styles.buttonHeader}`}>
        <a href="/store">STORE</a>
      </button>
    </div>
  </div>
);