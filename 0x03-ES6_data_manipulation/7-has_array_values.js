export default function hasValuesFromArray(setList, arrayList) {
  for (const item of arrayList) {
    if (!setList.has(item)) {
      return false;
    }
  }
  return true;
}
