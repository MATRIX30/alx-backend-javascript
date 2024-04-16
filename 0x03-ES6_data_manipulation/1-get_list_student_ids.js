export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects) !== true) {
    return [];
  }
  return arrayOfObjects.map((item) => item.id);
}
