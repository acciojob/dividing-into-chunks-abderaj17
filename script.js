const divide = (arr, n) => {
  let chunks = []; // This will hold our final chunks
  let tempChunk = []; // This will hold our temporary chunk
  let tempSum = 0; // This will hold the sum of the elements in the temporary chunk

  for (let i = 0; i < arr.length; i++) {
    tempChunk.push(arr[i]); // Add the current element to the temporary chunk
    tempSum += arr[i]; // Update the sum

    // If the sum exceeds 'n', we need to start a new chunk
    if (tempSum > n) {
      tempChunk.pop(); // Remove the last element from the temporary chunk
      chunks.push(tempChunk); // Add the temporary chunk to the list of chunks

      // Start a new chunk with the current element and update the sum
      tempChunk = [arr[i]];
      tempSum = arr[i];
    }
  }

  // After the iteration, if there is a chunk left, add it to the list of chunks
  if (tempChunk.length > 0) {
    chunks.push(tempChunk);
  }

  return chunks; 
};
 const arr = [1, 2, 3, 4, 5];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
