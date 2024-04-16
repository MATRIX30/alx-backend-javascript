export default function getStudentsByLocation(studentList, city) {
  if (Array.isArray(studentList) !== true) {
    return [];
  }
  return studentList.filter((student) => student.location === city);
}
