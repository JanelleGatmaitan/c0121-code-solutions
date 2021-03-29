/* exported defaults */
function defaults(target, source) {
  for (const property in source) {
    if (!target.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
}
