import Link from 'next/link'

import styles from '../components/home.module.css'
import globalStyles from '../styles/global.js'

import HtmlHead from "../components/Head";
import Header from "../components/Header";

import Card from "../components/Card";

import cardStyle from '../components/card.module.css'

var testBanner = {
  backgroundImage: `url(./testimage7.jpg)`,
  backgroundSize: "10%"
}

var testBanner2 = {
  backgroundImage: `url(./testimage8.jpg)`,
  backgroundSize: "5%"
}

export default function homePage() {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <HtmlHead 
        title={"Home"}
        description={"Asylum Minecraft is home to fun Minecraft Minigames on our servers"}
      />
      <Header />

      <div className={styles.playNowContent} style={testBanner}>
        <div className={styles.marginCenter}>
          <img src="./logoblack.png" style={{ width: "350px"}}></img>
          <h3>JOIN 24,295 OTHER UNIQUE PLAYERS</h3>
          <button className={`${styles.buttonPrimary} ${styles.mt1rem}`}>
            <Link href="/playnow">
              <a>PLAY NOW</a>
            </Link>
          </button>
        </div>
      </div>

      <div className={styles.contentRoot} style={testBanner2}>
        <div className={styles.wrapperMain}>
          <div className={styles.marginCenter}>
            <h1 className={`${styles.mt1rem} ${styles.mb1rem}`}>RECENT NEWS</h1>

            <div className={cardStyle.articles}>
              <Card
                image={"testimage"}
                headline={"Mitch can't find his tractor!"}
                type={"BREAKING NEWS"}
                date={"MAY 15 20"}
              />
              <Card
                image={"testimage2"}
                headline={"Mason LOST - Last seen in logs"}
                type={"REWARD $5,000"}
                date={"MAY 14 20"}
              />
              <Card
                image={"testimage3"}
                headline={"Really Catchy Headline"}
                type={"UPDATE NEWS"}
                date={"APRIL 10 20"}
              />
              <Card
                image={"testimage4"}
                headline={"Removed MK from Asylum"}
                type={"UPDATE NEWS"}
                date={"APRIL 1 20"}
              />
              <Card
                image={"testimage5"}
                headline={"Donald Trump found in a peach!"}
                type={"FAKE NEWS"}
                date={"MARCH 26 20"}
              />
              <Card
                image={"testimage6"}
                headline={"Mason whereabouts not known! Is he missing?"}
                type={"BREAKING NEWS"}
                date={"JAN 1 20"}
              />
            </div>

            <button className={`${styles.buttonPrimary} ${styles.mt2rem}`}>
              <a>LOAD MORE</a>
            </button>

          </div>
        </div>
      </div>

    </>
  )
}
