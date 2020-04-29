import React, { Children } from "react";
import styles from "./FullLayout.module.scss";

const FullLayout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.postList}>{children}</div>
  </div>
);

export default FullLayout;
