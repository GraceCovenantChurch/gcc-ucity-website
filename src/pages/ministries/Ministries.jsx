import React from "react";
import { useMediaQuery } from "react-responsive";

import GenericContent from "components/content/GenericContent";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import MinistriesCard from "components/card/MinistriesCard";
import MobileMinistriesCard from "components/card/MobileMinistriesCard";

import { getMinistries, massageMinistries } from "modules/Contentful";

import { MOBILE_QUERY } from "constants/mobile";

import staffURL from "static/images/staff/staff_background.jpg";

const Ministries = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <GenericContent cards title="Ministries" imageURL={staffURL}>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"Ministries"}
          fetchCall={[getMinistries]}
          massage={massageMinistries}
          component={mobile ? MobileMinistriesCard : MinistriesCard}
        />
      </GenericContent>
    </React.Fragment>
  );
};

export default Ministries;
