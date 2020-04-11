import React, { Component } from "react";

import styles from "./Home.module.scss";
import imageUrl from "static/worship.jpg";

class Home extends Component {
  render() {
    return (
      <div
        className={styles.home}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <section className={styles.homeContent}>
          <div className={styles.leftContent}></div>
          <div className={styles.rightContent}></div>
        </section>
      </div>
    );
  }
}

export default Home;
