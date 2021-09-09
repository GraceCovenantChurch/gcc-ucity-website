import React from "react";

import GenericContent from "components/content/GenericContent";
import Body from "components/content/text/Body";

import givingURL from "static/images/giving/giving_background.jpg";

const Giving = () => {
  return (
    <React.Fragment>
      <GenericContent title="Giving" imageURL={givingURL}>
        <Body>
          We would love for you to partner with us in the work of raising up
          kingdom workers. You may give below using our secure payment
          processor, Subsplash.
        </Body>
        <iframe
          title="donate"
          src="https://wallet.subsplash.com/ui/embed/QZRM2D/"
          width="100%"
          height="630"
          style={{ border: "none", overflow: "hidden" }}
          frameBorder="0"
          scrolling="no"
        />
        <Body>
          You may also give in person with cash or check at our Sunday Services.
          If you would like to give via direct bill pay from your bank, please
          use our address 3700 Baring Street Philadelphia, PA 19104
        </Body>
      </GenericContent>
    </React.Fragment>
  );
};

export default Giving;
