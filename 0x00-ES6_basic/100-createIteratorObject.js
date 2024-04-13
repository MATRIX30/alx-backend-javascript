export default function createIteratorObject(report) {
  const employees = [];
  for (const index in report.allEmployees) {
    if (index) {
      employees.push(...report.allEmployees[index]);
    }
  }
  return employees;
}
