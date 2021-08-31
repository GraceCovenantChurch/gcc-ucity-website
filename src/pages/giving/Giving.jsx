import React from "react";

import GenericContent from "components/content/GenericContent";
import Body from "components/content/text/Body";
import Subheading from "components/content/text/Subheading";

import givingURL from "static/images/giving/giving_background.jpg";

const Giving = () => {
  return (
    <React.Fragment>
      <GenericContent title="Giving" imageURL={givingURL}>
        <Body>
          Giving to GCC’s giving resource! We would love for you to partner with
          us in the work of raising up kingdom workers. Here are three ways in
          which you can contribute:
        </Body>
        <Subheading>Online</Subheading>
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
        <Subheading>In Person</Subheading>
        <Body>During Sunday Service</Body>
        <Subheading>By Mail</Subheading>
        <Body>3700 Baring Street Philadelphia, PA 19104</Body>
        <Body>
          If you feel the heart to, you can choose the specific cause/person
          you’d like to donate to. Whether you’re donating in person, by mail,
          or online, please include a note (i.e. “for UC Ministry Center”).
          Thank you ❤️
        </Body>
      </GenericContent>
    </React.Fragment>
  );
};

export default Giving;
