import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, PageContainer, Header, IntroSection } from '../components'
import styles from './styles/home.module.scss'

export default ({ data }) => (
  <PageContainer>
    <Header />
    <IntroSection />
    <Layout>
      <div>
        <div className={styles.postList}>
          {data.allMarkdownRemark.edges.map(post => (
            <Link
              to={post.node.fields.slug}
              className={styles.postLink}
              activeClassName={styles.postActive}
            >
              <div className={styles.post}>
                <h3 className={styles.title}>{post.node.frontmatter.title}</h3>
                <p className={styles.date}>{post.node.frontmatter.date}</p>
                <p className={styles.postBody}>{post.node.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
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