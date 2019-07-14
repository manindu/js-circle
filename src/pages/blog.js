import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, PostPreview } from '../components'
import styles from './styles/home.module.scss'

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(post => (
        <PostPreview
          slug={post.node.fields.slug}
          title={post.node.frontmatter.title}
          createAt={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
        />
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
