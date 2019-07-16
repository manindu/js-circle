import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, PageContainer, Header, IntroSection, PostPreview } from '../components'
import styles from './styles/home.module.scss'

export default ({ data }) => (
  <PageContainer>
    <Header />
    <IntroSection />
    <Layout>
        <div className={styles.postList}>
          {data.allMarkdownRemark.edges.map(post => (
            <PostPreview
              slug={post.node.fields.slug}
              title={post.node.frontmatter.title}
              createAt={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              tags={post.node.frontmatter.tags}
              author={post.node.frontmatter.author}
            />
          ))}
        </div>
    </Layout>
  </PageContainer>
);

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
            tags
            author
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