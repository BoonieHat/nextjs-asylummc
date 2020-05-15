import Link from 'next/link'
import styles from '../components/home.module.css'

export default () => (
  <div className={styles.header}>
    <div className={styles.wrapperMain}>
      <div className={styles.headerLogo}>
        <img src="./logowhite.png" style={ {width: "150px"} }></img>
      </div>

      <button className={`${styles.buttonHeader} ${styles.mr1rem}`}>
        <Link href="/support">
          <a>SUPPORT</a>
        </Link>
      </button>

      <button className={styles.buttonHeader}>
        <Link href="/store">
          <a>STORE</a>
        </Link>
      </button>
    </div>
  </div>
);