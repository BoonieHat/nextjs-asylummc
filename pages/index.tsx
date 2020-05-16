import Link from 'next/link'

import styles from '../components/home.module.css'
import globalStyles from '../styles/global.js'

import HtmlHead from "../components/Head";
import Header from "../components/Header";

import Footer from "../components/Footer";

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

import testScript from '../libs/test'


export default function homePage () {
  testScript("HelloWorld");
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
                link={"/article"}
                image={"testimage"}
                headline={"News is Breaking!"}
                type={"BREAKING NEWS"}
                date={"MAY 15 20"}
              />
              <Card
                link={"/article"}
                image={"testimage2"}
                headline={"Jesse James Wanted!"}
                type={"REWARD $5,000"}
                date={"MAY 14 20"}
              />
              <Card
                link={"/article"}
                image={"testimage3"}
                headline={"Really Catchy Headline"}
                type={"UPDATE NEWS"}
                date={"APRIL 10 20"}
              />
              <Card
                link={"/article"}
                image={"testimage4"}
                headline={"March will be extended to April 1st"}
                type={"UPDATE NEWS"}
                date={"APRIL 1 20"}
              />
              <Card
                link={"/article"}
                image={"testimage5"}
                headline={"Donald Trump found in a peach!"}
                type={"FAKE NEWS"}
                date={"MARCH 26 20"}
              />
              <Card
                link={"/article"}
                image={"testimage6"}
                headline={"A Really Really Long Headline for an Article"}
                type={"BREAKING NEWS"}
                date={"JAN 1 20"}
              />
            </div>

            <button className={`${styles.buttonPrimary} ${styles.mt1rem}`}>
              <a>LOAD MORE</a>
            </button>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
