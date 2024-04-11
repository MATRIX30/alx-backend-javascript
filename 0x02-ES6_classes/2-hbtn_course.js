export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get length() {
    return this._length;
  }

  /**
   * @param {Number} length
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('TypeError: Length must be a number');
    } else {
      this._length = length;
    }
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
