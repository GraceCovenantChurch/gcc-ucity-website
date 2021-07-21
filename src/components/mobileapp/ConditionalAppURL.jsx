import React from "react";
import { isAndroid, isIOS } from "react-device-detect";

import Link from "components/link/Link";

import { APPLE, ANDROID } from "constants/mobileapp";

const ConditionalAppURL = (props) => {
  console.log(props);
  if (isAndroid) {
    return (
      <React.Fragment>
        <Link className={props.className} to={ANDROID}>
          {"Download our app"}
        </Link>
        {" to follow along with us!"}
      </React.Fragment>
    );
  } else if (isIOS) {
    return (
      <React.Fragment>
        <Link className={props.className} to={APPLE}>
          {"Download our app"}
        </Link>
        {" to follow along with us!"}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link className={props.className} to={"/downloads"}>
          {"Download our app"}
        </Link>
        {" to follow along with us!"}
      </React.Fragment>
    );
  }
};

export default ConditionalAppURL;
