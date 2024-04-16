export default function createInt8TypedArray(length, position, value) {
  // Creating an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a new Int8 array from the buffer
  const intArray = new Int8Array(buffer);

  // Check if the position is within the range of the array
  if (position < 0 || position >= intArray.length) {
    throw new Error('Position outside range');
  }

  // Assign the value to the specified position in the array
  intArray[position] = value;

  // Return the ArrayBuffer
  return buffer;
}
