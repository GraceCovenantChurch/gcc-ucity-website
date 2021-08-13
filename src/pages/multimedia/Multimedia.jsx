import React from "react";
import { useMediaQuery } from "react-responsive";

import GenericContent from "components/content/GenericContent";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import MultimediaCard from "components/card/MultimediaCard";

import { getMultimediaPage, massageMultimediaPage } from "modules/Contentful";

import { MOBILE_QUERY } from "constants/mobile";

import staffURL from "static/images/staff/staff_background.jpg";

const Multimedia = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <GenericContent cards title="Multimedia" imageURL={staffURL}>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"Multimedia"}
          fetchCall={[getMultimediaPage]}
          massage={massageMultimediaPage}
          component={MultimediaCard}
        />
      </GenericContent>
    </React.Fragment>
  );
};

export default Multimedia;
