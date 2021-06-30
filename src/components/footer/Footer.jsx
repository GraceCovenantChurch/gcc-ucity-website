import React from "react";

import { Instagram, Facebook, Youtube } from "react-feather";
import Link from "@material-ui/core/Link";

import Center from "components/center/Center";

import styles from "./Footer.module.scss";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          Copyright &copy; 1996-{currentYear}. Official website of{" "}
          <a className={styles.footerLinks} href="/">
            Grace Covenant Church
          </a>{" "}
          in Philadelphia, PA. All rights reserved.
        </p>
      </div>
      <div className={styles.social}>
        <Center>
          <Link
            className={styles.socialLinks}
            href="https://www.instagram.com/gccphiladelphia/"
          >
            <Instagram />
          </Link>
          <Link
            className={styles.socialLinks}
            href="https://www.facebook.com/gccphiladelphia/"
          >
            <Facebook />
          </Link>
          <Link
            className={styles.socialLinks}
            href="https://www.youtube.com/user/GraceCovenantChurch"
          >
            <Youtube />
          </Link>
        </Center>
      </div>
    </footer>
  );
};

export default Footer;
