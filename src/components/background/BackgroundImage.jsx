import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import styles from "./BackgroundImage.module.scss";
import { MOBILE_QUERY } from "constants/mobile";

const BackgroundImage = (props) => {
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${props.imageURL})` }}
    >
      <div className={isMobile ? styles.contentMobile : styles.contentDesktop}>
        {props.children}
      </div>
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
