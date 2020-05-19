import styles from '../components/home.module.css'

import footerStyle from '../components/footer.module.css'

function active(props) {
  if (props.store == "active") {
    return ("active")
  }
  return ("notactive")
}

export default (props) => (
  <div className={footerStyle.footer}>
    <div className={styles.wrapperMain}>
    </div>
  </div>
);