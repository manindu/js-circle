import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import styles from './header.module.scss'

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <div className={styles.header}>
          {data.allMarkdownRemark.group.map(tag => {
            return (
              <Link key={tag.fieldValue} exact="true" to={`/tags/${tag.fieldValue.toLowerCase()}`} className={styles.item} activeClassName={styles.itemActiveBlog}>
                {tag.fieldValue}
              </Link>
            )
          })}
        </div>
      )}
    />
  )
}

export default Header
