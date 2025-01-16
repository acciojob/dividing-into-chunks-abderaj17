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
      // Otherwise, finalize the current chunk and start a new chunk
      if(tempChunk.length > 0) {
        chunks.push(tempChunk); 
      }
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
 const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
