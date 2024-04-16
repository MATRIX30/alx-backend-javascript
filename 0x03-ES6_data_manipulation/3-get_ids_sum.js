export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, studentList) => sum + studentList.id, 0);
}
