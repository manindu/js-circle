import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link exact to="/tags/javascript" className={styles.item} activeClassName={styles.itemActiveHome}>
        JavaScript
      </Link>
      <Link exact to="/tags/react" className={styles.item} activeClassName={styles.itemActiveBlog}>
        React
      </Link>
    </div>
  )
}

export default Header
