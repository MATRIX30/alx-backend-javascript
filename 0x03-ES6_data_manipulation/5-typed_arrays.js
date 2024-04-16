export default function createInt8TypedArray(length, position, value) {
  // creating an ArrayBuffer
  const buffer = new ArrayBuffer(length);
  // create a new Int8 array from buffer
  const intArray = new Int8Array(buffer);

  if (position < 0 || position >= intArray.length) {
    throw new Error('Position outside range');
  }

  intArray[position] = value;
  return new DataView(buffer);
}
