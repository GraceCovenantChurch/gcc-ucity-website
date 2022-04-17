/**
 * Global Constants
 */

import {
  DEFAULTS_KEY,
  SERVICES_KEY,
  COLLEGE_FNL_KEY,
  READING_CONTENT_KEY,
  SUNDAY_SERVICE_KEY,
  CROSSROAD_FNL_KEY,
  EVENTS_KEY,
  MEMORY_VERSE_KEY,
  BELIEFS_KEY,
  STAFF_KEY,
  FAMILY_GROUP_PAGE_KEY,
  MULTIMEDIA_PAGE_KEY,
  MINISTRIES_KEY,
  GCC_KEY,
  UNIVERSITY_CITY_KEY,
  MAIN_LINE_KEY,
  TOTAL_SERVICES,
  HOME_PAGE_EVENTS,
  RIGHT_NOW,
} from "constants/contentful";

import { fetchPassage } from "./ESV";
import { formatTime } from "./Time";

/**
 * Global Contentful Initiation
 */
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Global Helpers
 */

// const getNextDayOfWeek = (date, dayOfWeek) => {
//   // Code to check that date and dayOfWeek are valid left as an exercise

//   var resultDate = new Date(date.getTime());

//   resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));

//   return resultDate;
// };

/**
 * Content Type: Services
 */

// const NEXTFRIDAY = getNextDayOfWeek(new Date(), 5).setHours(23, 59, 59);
// const NEXTSUNDAY = getNextDayOfWeek(new Date(), 8).setHours(23, 59, 59);

const getDefaultServices = () => {
  return client
    .getEntries({
      content_type: DEFAULTS_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getCollegeFridayServices = () => {
  return client
    .getEntries({
      content_type: "services",
      "fields.eventStart[gte]": new Date(RIGHT_NOW).toISOString(),
      // "fields.eventEnd[lte]": new Date(NEXTFRIDAY).toISOString(),
      "fields.type": "collegefnl",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getCrossroadFridayServices = () => {
  return client
    .getEntries({
      content_type: "services",
      "fields.eventStart[gte]": new Date(RIGHT_NOW).toISOString(),
      // "fields.eventEnd[lte]": new Date(NEXTFRIDAY).toISOString(),
      "fields.type": "crossroadfnl",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getSundayServices = () => {
  return client
    .getEntries({
      content_type: "services",
      "fields.eventStart[gte]": new Date(RIGHT_NOW).toISOString(),
      // "fields.eventEnd[lte]": new Date(NEXTSUNDAY).toISOString(),
      "fields.type": "sundayservice",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getEasterServices = () => {
  return client
    .getEntries({
      content_type: "easterServices",
      order: "fields.eventStart",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageEasterServices = (data) => {
  let results = [];

  for (var element of data) {
    let fields = element.fields;

    results.push({
      ...fields,
      eventEnd: fields.eventStart ? formatTime(fields.eventEnd) : undefined,
      eventStart: fields.eventEnd ? formatTime(fields.eventStart) : undefined,
    });
  }

  return results;
};
/**
 * TODO: Joey Zia - I think there's a better way to go about this. If you know of
 * a better way to determine which service is missing, please don't hesitate
 * to let me know. This is probably the most shameful coding I've done.
 * Most likely the data needs to be redesigned.
 */
export const massageServices = async (data) => {
  let result = [];
  let expected = {};
  expected[COLLEGE_FNL_KEY] = undefined;
  expected[SUNDAY_SERVICE_KEY] = undefined;
  expected[CROSSROAD_FNL_KEY] = undefined;
  let defaultServices = undefined;

  if (data.length <= TOTAL_SERVICES) {
    defaultServices = await getDefaultServices();
  }

  for (var element of data) {
    let fields = element.fields;

    expected[fields.type] = {
      ...fields,
      eventEnd: formatTime(fields.eventEnd),
      eventStart: formatTime(fields.eventStart),
    };
  }

  // And really this is just the ugliest thing I've ever seen. Mercy on my soul.
  for (var key of Object.keys(expected)) {
    if (expected[key] === undefined) {
      for (var iterate of defaultServices) {
        let current = iterate.fields;
        for (var service of current.data[SERVICES_KEY]) {
          if (service.type === key) {
            expected[service.type] = {
              ...service,
              eventEnd: formatTime(service.eventEnd),
              eventStart: formatTime(service.eventStart),
            };
          }
        }
      }
    }
  }

  result.push(
    expected[SUNDAY_SERVICE_KEY],
    expected[COLLEGE_FNL_KEY],
    expected[CROSSROAD_FNL_KEY]
  );

  return result;
};

/**
 * Content Type: Events
 */

export const getEvents = () => {
  return client
    .getEntries({
      content_type: EVENTS_KEY,
      order: "fields.priority,fields.eventStart",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getHomeEvents = () => {
  return client
    .getEntries({
      content_type: EVENTS_KEY,
      order: "fields.priority,fields.eventStart",
      limit: HOME_PAGE_EVENTS,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageEvents = (data) => {
  let results = [];

  for (var element of data) {
    let fields = element.fields;

    results.push({
      ...fields,
      eventEnd: fields.eventStart ? formatTime(fields.eventEnd) : undefined,
      eventStart: fields.eventEnd ? formatTime(fields.eventStart) : undefined,
    });
  }

  return results;
};

/**
 * Content Type: Reading Plan
 */

export const getReadingContent = () => {
  return client
    .getEntries({
      content_type: READING_CONTENT_KEY,
      order: "fields.startDate",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageReadingContent = (data) => {
  let currentPlan;

  for (var plan of data) {
    let fields = plan.fields;
    let start = new Date(fields.startDate); // -1 because months are from 0 to 11
    var end = new Date(fields.endDate);

    if (RIGHT_NOW > start && RIGHT_NOW < end) {
      currentPlan = plan.fields;
    }
  }

  return currentPlan;
};

/**
 * Content Type: Memory Verse
 */

export const getMemoryVerse = () => {
  return client
    .getEntries({
      content_type: MEMORY_VERSE_KEY,
      order: "fields.year,fields.month",
    })
    .then((entries) => {
      return entries.items;
    });
};

// Async because we have to do another fetch call within this.
export const massageMemoryVerse = async (data) => {
  let currentMemoryVerse;
  for (var verse of data) {
    let fields = verse.fields;

    if (
      fields.month === RIGHT_NOW.getMonth() + 1 &&
      fields.year === RIGHT_NOW.getFullYear()
    ) {
      let passageResult = await fetchPassage(fields.reference);
      let passageFinal = "";

      if (passageResult.length === 1) {
        passageFinal = passageResult[0].trim();
      } else {
        for (var passage of passageResult) {
          passageFinal += passage.trim() + " ";
        }
        passageFinal = passageFinal.trim();
      }

      // Removing mismatch quotes.
      passageFinal = passageFinal.match(/\w+|'[^']*'/g).join(" ");

      currentMemoryVerse = {
        passage: passageFinal,
        ...fields,
      };
    }
  }

  return currentMemoryVerse;
};

/**
 * Content Type: Beliefs
 */

export const getBeliefs = () => {
  return client
    .getEntries({
      content_type: BELIEFS_KEY,
      order: "fields.order",
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageBeliefs = (data) => {
  let results = [];
  for (var entry of data) {
    results.push(entry.fields);
  }

  return results;
};

/**
 * Content Type: Staff
 */

export const getGCCStaff = () => {
  return client
    .getEntries({
      content_type: STAFF_KEY,
      order: "fields.order",
      "fields.site": GCC_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getUniversityCityStaff = () => {
  return client
    .getEntries({
      content_type: STAFF_KEY,
      order: "fields.order",
      "fields.site": UNIVERSITY_CITY_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const getMainLineStaff = () => {
  return client
    .getEntries({
      content_type: STAFF_KEY,
      order: "fields.order",
      "fields.site": MAIN_LINE_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageStaff = (data) => {
  let results = [];
  for (var entry of data) {
    results.push(entry.fields);
  }

  return results;
};

/**
 * Content Type: Family Group Page
 */

export const getFamilyGroupPage = () => {
  return client
    .getEntries({
      content_type: FAMILY_GROUP_PAGE_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageFamilyGroupPage = (data) => {
  let results = [];
  for (var entry of data) {
    results.push(entry.fields);
  }

  return results;
};

/**
 * Content Type: Ministries
 */

export const getMinistries = () => {
  return client
    .getEntries({
      content_type: MINISTRIES_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageMinistries = (data) => {
  let results = [];
  for (var entry of data) {
    results.push(entry.fields);
  }

  return results;
};

/**
 * Content Type: Multimedia
 */

export const getMultimediaPage = () => {
  return client
    .getEntries({
      content_type: MULTIMEDIA_PAGE_KEY,
    })
    .then((entries) => {
      return entries.items;
    });
};

export const massageMultimediaPage = (data) => {
  let results = [];
  for (var entry of data) {
    results.push(entry.fields);
  }

  return results;
};
