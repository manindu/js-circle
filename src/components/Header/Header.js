import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery } from "gatsby";
import Tag from "../Tag";
import styles from "./header.module.scss";
import { getTitleLabel } from "../../helpers";

const Header = ({ withLogo }) => {
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
      render={(data) => (
        <div className={styles.header}>
          {withLogo && (
            <Link exact="true" to="/">
              <img
                className={styles.logo}
                src={require("../../images/jscircle.png")}
                alt="JS Circle"
              />
            </Link>
          )}
          <div className={styles.linkGroup}>
            {data.allMarkdownRemark.group.map((tag) => {
              return (
                <Link
                  key={tag.fieldValue}
                  exact="true"
                  to={`/tags/${tag.fieldValue}`}
                  className={styles.item}
                  activeClassName={styles.itemActiveBlog}
                >
                  <p>{getTitleLabel(tag.fieldValue)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};

Header.propTypes = {
  withLogo: PropTypes.bool,
};

Header.defaultProps = {
  withLogo: false,
};

export default Header;
