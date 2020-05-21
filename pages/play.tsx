import Link from 'next/link'

import styles from '../components/home.module.css'
import globalStyles from '../styles/global.js'

import HtmlHead from "../components/head/head";
import Header from "../components/head/header";

import Footer from "../components/footer/footer";

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
      <div style={{ backgroundImage: `url(./roll.jpg)`, height: "100vh" }}>
        <div className={styles.marginCenter} style={{ paddingTop: "80px", borderRadius: "5px" }}>
          <iframe
            id="ytplayer"
            width="860"
            height="480"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          >
          </iframe>
          <div style={{ color: "#fff", fontFamily: "Inter" }}>
            <h1>This is just a placeholder page while I work on it. Enjoy Rick</h1>
          </div>
        </div>
      </div>
    </>
  )
}
