import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components'
import styles from './styles/home.module.scss'

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(post => (
        <Link key={post.node.fields.slug} to={post.node.fields.slug} className={styles.postLink} activeClassName={styles.postActive}>
          <div className={styles.post}>
            <h3>{post.node.frontmatter.title}</h3>
            <p className={styles.date}>{post.node.frontmatter.date}</p>
            <p className={styles.postBody}>{post.node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
