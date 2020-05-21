import cardStyle from '../article/card.module.css'
import homeStyle from '../home.module.css' 

import Link from 'next/link'

var backgroundImage = props => {
  return({
    backgroundImage: `url(./${props.image}.jpg)`,
    backgroundPosition: "center"
  })
}

export default (props) => (
  <div className={`${cardStyle.card}`} style={backgroundImage(props)}>
    <Link href={props.link}>
      <a>
        <div className={cardStyle.gradientOverlay}>
          <h3 className={`${cardStyle.articleTitle}`} alt={`Article Headline: ${props.headline}`}>
            {props.headline}
          </h3>

          <article className={`${homeStyle.mtAuto}`}>
            <h3 alt={`Article Type: ${props.type}`}>
              {props.type}
            </h3>
            <h3 alt={`Article Date: ${props.date}`}>
              {props.date}
            </h3>
          </article>
        </div>
      </a>
    </Link>
  </div>
);