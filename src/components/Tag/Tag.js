import React from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";
import { getTitleLabel } from "../../helpers";

const Tag = ({ text }) => {
  return (
    <div
      className={`${styles.container} ${
        styles[text.replace(".", "").toLowerCase()]
      }`}
    >
      <p className={styles.tagText}>{getTitleLabel(text)}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
