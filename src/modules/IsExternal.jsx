/**
 * Giving credit where credit is due: https://penguinofwar.github.io/bagofholding/
 * The reason why I pulled from his source code is because Jest did not enjoy
 * the conversion. Not 100% sure why since I am not a babel expert. I rely on
 * CRA's internal setup.
 * Actual source code: https://github.com/PenguinOfWar/bagofholding/blob/master/src/packages/is-external/is-external.js
 */

export const isExternal = (to, customConditional) => {
  let isExternal = false;

  if (
    /^(f|ht)tps?:\/\//i.test(to.toLowerCase()) ||
    /^mailto:([^?]*)/.test(to.toLowerCase()) ||
    /^ww(w|[0-9])(.)/.test(to.toLowerCase()) ||
    /.(\.|a-zA-Z)/.test(to.toLowerCase()) ||
    (customConditional &&
      typeof (customConditional === "function") &&
      customConditional(to))
  ) {
    isExternal = true;
  }
  return isExternal;
};
