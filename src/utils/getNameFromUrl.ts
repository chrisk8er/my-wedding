export function getNameFromURL() {
  return window.location.hash.replace(/%20/gm, ' ').replace('#', '');
}
