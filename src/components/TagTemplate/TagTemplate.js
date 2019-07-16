import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import PostPreview from '../PostPreview'
import Layout from '../Layout'
import styles from './TagTemplate.module.scss'

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} ${tag} Article ${totalCount === 1 ? "" : "s"}`

  return (
    <Layout>
      <div className={styles.introSection}>
        <h1 className={styles.heading}>{tagHeader}</h1>
      </div>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date, tags, author } = node.frontmatter
          return (
            <PostPreview
              key={slug}
              slug={slug}
              title={title}
              createAt={date}
              tags={tags}
              author={author}
              excerpt={node.excerpt}
            />
          )
        })}
      </ul>
    </Layout>
  )
}

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string).isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            excerpt: PropTypes.string.isRequired,
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            tags
          }
          excerpt
        }
      }
    }
  }
`