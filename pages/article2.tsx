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
          <img src="./testimage2.jpg"></img>
        </div>

        <div className={articleStyles.container}>
          <div className={`${styles.marginCenter}`}>
            <h1>Jesse James Wanted!</h1>
            <p>
              Morbi vulputate viverra mauris eu eleifend. In a lacus vehicula lectus tristique accumsan. Nunc blandit arcu nec posuere tristique. Mauris molestie ornare lacus ac lobortis. In semper pretium enim eu egestas. Aenean eros enim, consectetur non vehicula efficitur, pretium nec ex. Fusce eu eleifend neque. Maecenas id elit dignissim, ultricies nibh et, ultrices sapien. Suspendisse potenti.
            </p>
            <p>
              Integer ut convallis lacus. Duis lobortis lectus sed gravida porttitor. Fusce vestibulum, est a porta blandit, sem tellus lobortis sapien, nec rhoncus ligula tellus nec augue. Morbi auctor tincidunt urna ac molestie. Nam id laoreet enim. Cras a sollicitudin massa, feugiat pharetra sem. Aenean dictum pellentesque nibh eu convallis. Duis consequat tempor pellentesque. Suspendisse potenti. Vivamus sit amet cursus nibh. Duis faucibus, ipsum nec luctus fringilla, ante libero semper ipsum, in elementum sapien nisl eget lorem. Curabitur quis justo nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan enim ac tortor condimentum, vitae egestas lorem lobortis. Vestibulum ante orci, sodales at est id, mollis fringilla sapien. Nullam nec ullamcorper dui, a ultrices massa. Vivamus vitae nisi nibh. Vivamus in hendrerit enim. Ut finibus, lacus eu consectetur viverra, mi lectus convallis sem, in sodales felis turpis id quam. Aenean et maximus lorem, at posuere libero. Phasellus felis risus, accumsan vitae aliquet non, consequat et dolor. Donec ornare lacus lacus, sit amet scelerisque lorem venenatis sit amet. Nullam tempus, quam vel egestas porttitor, tellus augue feugiat metus, at facilisis ante ligula id eros.
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