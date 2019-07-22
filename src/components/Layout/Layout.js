import React from 'react'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <React.Fragment>
    <div className={styles.layout}>
      {children}
    </div>
  </React.Fragment>
)

export default Layout
