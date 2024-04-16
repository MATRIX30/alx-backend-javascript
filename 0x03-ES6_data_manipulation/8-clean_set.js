export default function cleanSet(setList, startString) {
  const finalStr = [];
  if (startString === '') {
    return '';
  }
  for (const str of setList) {
    if (str.startsWith(startString)) {
      finalStr.push(str.slice(startString.length));
    }
  }
  return finalStr.join('-');
}
