const divide = (arr, n) => {
  let chunks = []; // List of subarrays
  let tempChunk = []; // Temporary subarray to build chunks
  let tempSum = 0; // Running sum of the current chunk

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element keeps the sum ≤ n, add it to the current chunk
    if (tempSum + arr[i] <= n) {
      tempChunk.push(arr[i]);
      tempSum += arr[i];
    } else {
      // Otherwise, finalize the current chunk
      chunks.push(tempChunk);
      // Start a new chunk with the current element
      tempChunk = [arr[i]];
      tempSum = arr[i];
    }
  }

  // If there are remaining elements in tempChunk, add them to chunks
  if (tempChunk.length > 0) {
    chunks.push(tempChunk);
  }

  return chunks;
};
 const arr = [1, 2, 3, 4, 5];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
