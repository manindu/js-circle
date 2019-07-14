import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import styles from './IntroSection.module.scss'

export default ({ data }) => {
  // return (
  //   <div className={styles.container}>
  //     <Img fluid={data.logo.childImageSharp.fluid} />
  //     <h2 className={styles.heading}>Learn Modern Web Development</h2>
  //     <p className={styles.subheading}>JavaScript, React, Vue.js, Node.js and lot more</p>
  //   </div>
  // )
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/jscircle.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={styles.container}>
            <Img className={styles.logo} fixed={data.file.childImageSharp.fixed} />
            <h2 className={styles.heading}>Learn Modern Web Development</h2>
            <p className={styles.subheading}>
              JavaScript, React, Vue.js, Node.js and lot more
            </p>
          </div>
        )
      }}
    />
  );
}



// export default IntroSection