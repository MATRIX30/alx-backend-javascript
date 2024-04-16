export default function cleanSet(setList, startString) {
  let finalStr = '';
  if (startString === '') {
    return finalStr;
  }
  for (const str of setList) {
    if (str.startsWith(startString)) {
      finalStr += str.slice(startString.length);
      finalStr += '-';
    }
  }
  finalStr = finalStr.substring(0,finalStr.length - 1);
  return finalStr;
}
