import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../Layout'
import {
  FiArrowLeft
} from 'react-icons/fi'
import styles from './Post.module.scss'
import SEO from '../Seo';

const Post = ({ data }) => {
  const post = data.markdownRemark
  console.log(post.frontmatter)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        meta={post.frontmatter.meta}
      />
      <div className={styles.backSection}>
        <Link
          exact to="/"
          className={styles.item}
          activeClassName={styles.itemActiveBack}
        >
          <FiArrowLeft size={20} /> Back
        </Link>
      </div>
      <h1>{post.frontmatter.title}</h1>
      <p className={styles.date}>By {post.frontmatter.author}</p>
      <div
        className={styles.para}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <p className={styles.date}>Published on {post.frontmatter.date}</p>
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
        description
        meta {
          name
          content
        }
      }
    }
  }
`

export default Post
