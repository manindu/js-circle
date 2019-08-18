import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Tag from '../Tag'
import styles from './PostPreview.module.scss'

const PostPreview = ({ title, slug, createAt, excerpt, tags, author }) => (
  <Link
    key={slug}
    to={slug}
    className={styles.postLink}
    activeClassName={styles.postActive}
  >
    <div className={styles.post}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.date}>{createAt} by {author}</p>
      <p className={styles.postBody}>{excerpt}</p>
      {tags && tags.map(tag => <Tag key={tag} text={tag} />)}
    </div>
  </Link>
);

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  createAt: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string,
}

PropTypes.defaultProps = {
  author: ''
}

export default PostPreview