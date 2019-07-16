import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.module.scss'

const Tag = ({ text }) => (
  <div className={`${styles.container} ${styles[text.replace('.', '-').toLowerCase()]}`}>
    <p className={styles.tagText}>{text}</p>
  </div>
)

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tag