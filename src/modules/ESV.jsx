import axios from "axios";

import { ESV_URL } from "constants/esv";

const instance = axios.create({
  baseURL: ESV_URL,
});

instance.defaults.headers.common["Authorization"] =
  process.env.REACT_APP_ESV_AUTH_TOKEN;

export const fetchPassage = async (reference) => {
  return instance
    .get("passage/text/", {
      params: {
        q: reference,
        "include-headings": false,
        "include-footnotes": false,
        "include-verse-numbers": false,
        "include-short-copyright": false,
        "include-passage-references": false,
      },
    })
    .then((response) => {
      return response.data.passages;
    });
};
