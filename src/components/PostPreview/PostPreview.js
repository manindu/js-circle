import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './PostPreview.module.scss'

const PostPreview = ({ title, slug, createAt, excerpt }) => (
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
      <p className={styles.date}>{createAt}</p>
      <p className={styles.postBody}>{excerpt}</p>
    </div>
  </Link>
);


export default PostPreview