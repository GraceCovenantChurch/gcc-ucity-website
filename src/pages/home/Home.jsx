import React, { Component } from "react";

import BackgroundImage from "components/background/BackgroundImage";

import styles from "./Home.module.scss";
import imageURL from "static/worship.jpg";

class Home extends Component {
  render() {
    return (
      <BackgroundImage imageURL={imageURL}>
        <div className={styles.leftContent}></div>
        <div className={styles.rightContent}></div>
      </BackgroundImage>
    );
  }
}

export default Home;
