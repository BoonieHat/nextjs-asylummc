import Link from 'next/link'

import styles from '../components/home.module.css'
import globalStyles from '../styles/global.js'

import HtmlHead from "../components/Head";
import Header from "../components/Header";

import Footer from "../components/Footer";

import articleStyles from "../components/article.module.css"

var testBanner2 = {
  backgroundImage: `url(./testimage8.jpg)`,
  backgroundSize: "5%"
}

export default function PlayNow (props) {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <HtmlHead
        title={"Play Now"}
        description={"Asylum Minecraft is home to fun Minecraft Minigames on our servers"}
      />
      <Header />

      <div className={styles.contentRoot}>
          <div className={`${styles.marginCenter}`}>
            <h1>Play now would go here</h1>
            <p>
              Showing how to join server etc explained WIP Page...
            </p>

            <button className={`${styles.buttonPrimary} ${styles.mt1rem}`}>
              <Link href="/">
                <a>GO HOME</a>
              </Link>
            </button>
          </div>
      </div>
    </>
  )
}
