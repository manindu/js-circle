import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  PageContainer,
  Header,
  IntroSection,
  PostPreview,
  SEO,
} from "../components";
import styles from "./styles/home.module.scss";

export default ({ data }) => (
  <PageContainer>
    <SEO title="JS Circle - Learn JavaScript, React, Node.js, Vue.js and lot more." />
    <div className={styles.topSection}>
      <Header withLogo />
      <IntroSection />
    </div>
    <div className={styles.homeLayout}>
      <div className={styles.postList}>
        {data.allMarkdownRemark.edges.map((post) => (
          <PostPreview
            key={post.node.fields.slug}
            slug={post.node.fields.slug}
            title={post.node.frontmatter.title}
            createAt={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            tags={post.node.frontmatter.tags}
            author={post.node.frontmatter.author}
          />
        ))}
      </div>
    </div>
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
`;
