import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Tag from "../Tag";
import styles from "./PostPreview.module.scss";
import { getTitleLabel } from "../../helpers";

const PostPreview = ({ title, slug, createAt, excerpt, tags, author }) => (
  <div className={styles.post}>
    <Link
      key={slug}
      to={slug}
      className={styles.postLink}
      activeClassName={styles.postActive}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
    <p className={styles.date}>{createAt}</p>
    <p className={styles.postBody}>{excerpt}</p>
    {tags &&
      tags.map((tag) => {
        return (
          <Link
            key={tag}
            exact="true"
            to={`/tags/${tag}`}
            className={styles.item}
            activeClassName={styles.itemActiveBlog}
          >
            <Tag text={getTitleLabel(tag)} />
          </Link>
        );
      })}
  </div>
);

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  createAt: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string,
};

PropTypes.defaultProps = {
  author: "",
};

export default PostPreview;
