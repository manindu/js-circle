import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../Layout'
import {
  FiArrowLeft
} from 'react-icons/fi'
import styles from './Post.module.scss'
import SEO from '../Seo';
import Header from '../Header'
import PageContainer from '../PageContainer';

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <PageContainer>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        meta={post.frontmatter.meta}
      />
      <Header withLogo />
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p className={styles.author}>By {post.frontmatter.author}</p>
        <div
          className={styles.para}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <p className={styles.date}>Published on {post.frontmatter.date}</p>
      </Layout>
    </PageContainer>
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
