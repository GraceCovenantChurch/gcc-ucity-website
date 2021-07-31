import React from "react";
import { useMediaQuery } from "react-responsive";

import GenericContent from "components/content/GenericContent";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import EventsCard from "components/card/EventsCard";
import MobileEventsCard from "components/card/MobileEventsCard";

import { getEvents, massageEvents } from "modules/Contentful";

import { MOBILE_QUERY } from "constants/mobile";

import eventsURL from "static/images/events/events_background.jpg";

const Events = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <GenericContent title="Events" imageURL={eventsURL}>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"Events"}
          fetchCall={[getEvents]}
          massage={massageEvents}
          component={mobile ? MobileEventsCard : EventsCard}
        />
      </GenericContent>
    </React.Fragment>
  );
};

export default Events;
