import { isAndroid, isIOS } from "react-device-detect";

import { APPLE, ANDROID } from "constants/mobileapp";

export const mobileURL = () => {
  if (isAndroid) {
    return ANDROID;
  } else if (isIOS) {
    return APPLE;
  } else {
    return "/downloads";
  }
};
