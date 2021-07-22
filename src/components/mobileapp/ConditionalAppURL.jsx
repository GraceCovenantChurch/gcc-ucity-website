import React from "react";

import Link from "components/link/Link";

import { mobileURL } from "modules/MobileApplicationURL";

const ConditionalAppURL = (props) => {
  let url = mobileURL();
  return (
    <React.Fragment>
      <Link className={props.className} to={url}>
        {"Download our app"}
      </Link>
      {" to follow along with us!"}
    </React.Fragment>
  );
};

export default ConditionalAppURL;
