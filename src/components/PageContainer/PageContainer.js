import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageContainer.module.scss'

const PageContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
}

export default PageContainer