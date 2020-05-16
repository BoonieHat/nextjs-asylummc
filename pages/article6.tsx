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

export default function (props) {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <HtmlHead
        title={"Article"}
        description={"Asylum Minecraft is home to fun Minecraft Minigames on our servers"}
      />
      <Header />

      <div className={styles.contentRoot} style={testBanner2}>

        <div className={`${articleStyles.headerImage} ${styles.marginCenter}`}>
          <img src="./testimage6.jpg"></img>
        </div>

        <div className={articleStyles.container}>
          <div className={`${styles.marginCenter}`}>
            <h1>A Really Really Long Headline for an Article</h1>
            <p>
              This article is so amazing that it is the headline is so catchy. It is also extremely long.
            </p>

            <button className={`${styles.buttonPrimary} ${styles.mt1rem}`}>
              <Link href="/">
                <a>GO HOME</a>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}