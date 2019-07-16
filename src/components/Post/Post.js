import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../Layout'
import {
  FiArrowLeft
} from 'react-icons/fi'
import styles from './Post.module.scss'

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.backSection}>
        <Link
          exact to="/"
          className={styles.item}
          activeClassName={styles.itemActiveBack}
        >
          <FiArrowLeft size={20} /> Back
        </Link>
      </div>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <p className={styles.date}>{post.frontmatter.date} by {post.frontmatter.author}</p>
      <div
        className={styles.para}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
      }
    }
  }
`

export default Post
