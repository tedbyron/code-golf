/**
 * For a given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

/**
* golfed function
*/
f=(a,b,c=[])=>{for(i=Math.ceil(a.length/b);i--;){c[i]=[];for(j=b;j--;)if(a[i*b+j])c[i][j]=a[i*b+j]}return c}

/**
 * ungolfed
 * @param   {number[]}    arr   input array
 * @param   {number}      size  size of chunks
 * @returns {number[][]}        array of chunks composed from arr
 */
function chunk(arr, size) {
  let chunks = [];

  for (i = 0; i < Math.ceil(arr.length / size); i++) {
    chunks[i] = [];

    for (j = 0; j < size; j++) {
      if (arr[i * size + j]) {
        chunks[i][j] = arr[i * size + j];
      }
    }
  }

  return chunks;
}
