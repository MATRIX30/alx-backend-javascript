export default function createInt8TypedArray(length, position, value) {
  // creating an ArrayBuffer
  const buffer = new ArrayBuffer(length);
  // create a new Int8 array from buffer
  const intArray = new Int8Array(buffer);
  try {
    intArray[position] = value;
    return intArray;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
