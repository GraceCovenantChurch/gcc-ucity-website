import React from "react";

import GenericContent from "components/content/GenericContent";

import givingURL from "static/images/giving/giving_background.jpg";

const NotFound = () => {
  return (
    <React.Fragment>
      <GenericContent
        title="Woops! This URL doesn't exist!"
        imageURL={givingURL}
      />
    </React.Fragment>
  );
};

export default NotFound;
