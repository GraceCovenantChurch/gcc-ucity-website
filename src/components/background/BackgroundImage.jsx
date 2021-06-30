import React from "react";
import PropTypes from "prop-types";

import styles from "./BackgroundImage.module.scss";

const BackgroundImage = (props) => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${props.imageURL})` }}
    >
      <section className={styles.content}>{props.children}</section>
    </div>
  );
};

BackgroundImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BackgroundImage;
