import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components'
import styles from './styles/home.module.scss'

const PageNotFound = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={styles.notFoundContainer}>
        <h1>Page Not Found</h1>
      </div>
    </Layout>
  )
}

export default PageNotFound
