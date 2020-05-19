import Link from 'next/link';
import styles from '../components/home.module.css';
import globalStyles from '../styles/global.js';
import cardStyle from '../components/card.module.css';
import mainStyles from '../components/main.module.css';
import HtmlHead from "../components/Head";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import testScript from '../libs/test';
var testBanner2 = { backgroundImage: `url(./testimage8.jpg)`, backgroundSize: "5%" }

export default function homePage () {
  testScript("HelloWorld");
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <HtmlHead title={"Home"} description={"Asylum Minecraft is home to fun Minecraft Minigames on our servers"} />
      <Header />
      
      <div className={mainStyles.asylumcarousel}>
        <div className={mainStyles.asylumimg} style={{backgroundImage: `url(./testbanner.jpg)`}}>
          <div className={styles.marginCenter}>
            <img src="./logowhite.png" style={{ width: "350px" }}></img>
            <h3>JOIN 24,295 OTHER UNIQUE PLAYERS</h3>
            <button className={`${styles.buttonPrimary} ${styles.mt1rem}`}>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">PLAY NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.contentRoot} style={testBanner2}>
        <div className={styles.wrapperMain}>
          <div className={styles.marginCenter}>
            <h1 className={`${styles.headline}`}>RECENT NEWS</h1>

            <div className={cardStyle.articles}>
              <Card
                link={"/article1"}
                image={"testimage"}
                headline={"News is Breaking!"}
                type={"BREAKING NEWS"}
                date={"MAY 15 20"}
              />
              <Card
                link={"/article2"}
                image={"testimage2"}
                headline={"Jesse James Wanted!"}
                type={"REWARD $5,000"}
                date={"MAY 14 20"}
              />
              <Card
                link={"/article3"}
                image={"testimage3"}
                headline={"Really Catchy Headline"}
                type={"UPDATE NEWS"}
                date={"APRIL 10 20"}
              />
              <Card
                link={"/article4"}
                image={"testimage4"}
                headline={"March will be extended to April 1st"}
                type={"UPDATE NEWS"}
                date={"APRIL 1 20"}
              />
              <Card
                link={"/article5"}
                image={"testimage5"}
                headline={"Donald Trump found in a peach!"}
                type={"FAKE NEWS"}
                date={"MARCH 26 20"}
              />
              <Card
                link={"/article6"}
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
