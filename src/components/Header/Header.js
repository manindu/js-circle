import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery } from "gatsby";
import { FiMoreHorizontal, FiXCircle } from "react-icons/fi";
import Tag from "../Tag";
import styles from "./header.module.scss";
import { getTitleLabel } from "../../helpers";

const Header = ({ withLogo }) => {
  const [menuOpen, toggleMenu] = useState(false);

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
        <>
          <div className={styles.headerSmall}>
            {withLogo && (
              <Link exact="true" to="/">
                <img
                  className={styles.logo}
                  src={require("../../images/jscircle.png")}
                  alt="JS Circle"
                />
              </Link>
            )}
            <div>
              {menuOpen ? (
                <FiXCircle size={24} onClick={() => toggleMenu(!menuOpen)} />
              ) : (
                <FiMoreHorizontal
                  size={24}
                  onClick={() => toggleMenu(!menuOpen)}
                />
              )}
            </div>
          </div>
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
          {menuOpen && (
            <div className={styles.listMenu}>
              {data.allMarkdownRemark.group.map((tag) => {
                return (
                  <Link
                    key={tag.fieldValue}
                    exact="true"
                    to={`/tags/${tag.fieldValue}`}
                    className={menuOpen ? styles.itemMobile : styles.item}
                    activeClassName={styles.itemActiveBlog}
                  >
                    <p>{getTitleLabel(tag.fieldValue)}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </>
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
