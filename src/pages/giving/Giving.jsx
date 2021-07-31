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
        <Subheading>In Person</Subheading>
        <Body>During Sunday Service</Body>
        <Subheading>By Mail</Subheading>
        <Body>3700 Baring Street Philadelphia, PA 19104</Body>
        <Subheading>Online</Subheading>
        <Body>
          Donating via check or cash will save GCC transaction fees.
          Alternatively, if you would like to give online, please use the module
          below. If it is your first time giving online, you will need to set up
          an account.
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
        <Subheading>
          Please consider contributing to some of our specific needs.
        </Subheading>
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
