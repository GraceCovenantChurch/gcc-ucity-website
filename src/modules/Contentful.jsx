import date from "date-and-time";

const contentful = require("contentful");

/**
 * Global Contentful Initiation
 */
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Global Helpers
 */

const getNextDayOfWeek = (date, dayOfWeek) => {
  // Code to check that date and dayOfWeek are valid left as an exercise

  var resultDate = new Date(date.getTime());

  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));

  return resultDate;
};

/**
 * Global Constants
 */

const DEFAULTS_KEY = "defaults";
const SERVICES_KEY = "services";
const COLLEGE_FNL_KEY = "collegefnl";
const SUNDAY_SERVICE_KEY = "sundayservice";
const CROSSROAD_FNL_KEY = "crossroadfnl";
const TOTAL_SERVICES = "3";

/**
 * Content Type: Services
 */

const NEXTFRIDAY = getNextDayOfWeek(new Date(), 5).setHours(23, 59, 59);
const NEXTSUNDAY = getNextDayOfWeek(new Date(), 8).setHours(23, 59, 59);

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
      "fields.eventEnd[lte]": new Date(NEXTFRIDAY),
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
      "fields.eventEnd[lte]": new Date(NEXTFRIDAY),
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
      "fields.eventEnd[lte]": new Date(NEXTSUNDAY),
      "fields.type": "sundayservice",
    })
    .then((entries) => {
      return entries.items;
    });
};

/** TODO: Joey Zia - I think there's a better way to go about this. If you know of
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

  if (data.length < TOTAL_SERVICES) {
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
            expected[service.type] = service;
          }
        }
      }
    }
  }

  result.push(
    expected[COLLEGE_FNL_KEY],
    expected[SUNDAY_SERVICE_KEY],
    expected[CROSSROAD_FNL_KEY]
  );

  return result;
};

/**
 * Helpers
 */
const formatTime = (time) => {
  return date.format(new Date(time), "hh:mmA");
};
