export const smCaps = (str) => `<span class='u-smcaps'>${str}</span>`
export const replacer = function(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log(match)
  return smCaps(string);
}

export default (input) => input.replace(/^[A-Z]*$/i, replacer)
