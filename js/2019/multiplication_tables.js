/**
 * "Create a function that accepts dimensions, of Rows x Columns, as parameters
 * in order to create a multiplication table sized according to the given
 * dimensions. The return value of the function must be an array, and the
 * numbers must be Fixnums, NOT strings."
 */

/**
 * golfed function
 */
f=(a,b)=>[...Array(a)].map((_,i)=>[...Array(b)].map((_,j)=>(i+1)*(j+1)))

/**
 * ungolfed
 * @param   {number}     numRows    the number of rows the table should have
 * @param   {number}     numColumns the number of columns the table should have
 * @returns {number[][]}            the resulting multiplication table
 */
function multiplicationTable(numRows, numColumns) {
  return [...Array(numRows)].map((_, i) => {
    return [...Array(numColumns)].map((_, j) => {
      return (i + 1) * (j + 1);
    });
  });
}
