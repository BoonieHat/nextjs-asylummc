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
          <img src="./testimage5.jpg"></img>
        </div>

        <div className={articleStyles.container}>
          <div className={`${styles.marginCenter}`}>
            <h1>Donald Trump found in a peach!</h1>
            <p>
              Morbi vulputate viverra mauris eu eleifend. In a lacus vehicula lectus tristique accumsan. Nunc blandit arcu nec posuere tristique. Mauris molestie ornare lacus ac lobortis. In semper pretium enim eu egestas. Aenean eros enim, consectetur non vehicula efficitur, pretium nec ex. Fusce eu eleifend neque. Maecenas id elit dignissim, ultricies nibh et, ultrices sapien. Suspendisse potenti.
            </p>
            <p>
              Donec vulputate nulla sit amet dignissim aliquam. Nulla at dapibus nulla. Sed quis ornare mi. Quisque et pellentesque est. Phasellus non est ut velit placerat lobortis. In hac habitasse platea dictumst. Duis quis dui ullamcorper, placerat lacus scelerisque, elementum orci. Integer viverra sit amet risus in semper. Phasellus id dignissim dui.
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