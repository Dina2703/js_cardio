//CHALLENGE 1: LONGEST WORD
//return the longest word of a string, or an array if there are more than 1 word
function logestWord(sentence) {
  //match() method gets a regex as its argument and returns an array containing all matches of the pattern, .match(/[a-z0-9]+/g) - to get only letters and numbers, ignore other characters like comma, questio mark and e.g.
  const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((x, y) => {
    return x.length + y.length;
  });
  //if multiple words, put into array
  const longestWordArr = sorted.filter(
    (each) => sorted[0].length === each.length
  );

  //check if more tahn one array value
  if (longestWordArr.length === 1) {
    //return the word, just a string
    return longestWordArr[0];
  } else {
    //else return the entire array
    return longestWordArr;
  }
}

///////////////////////////////////
//CHALLENGE 2: ARRAY CHUNKING
//split an array into chunked arrays of a specific length
function chunkArray(arr, len) {
  // //way 1: with while loop
  // //init chunked arr
  // const chunkedArr = [];
  // //set index
  // let i = 0;
  // //loop while index is less than the array length(len)
  // while (i < arr.length) {
  //   //Slice out from the index to the index + len and push onto the chunkedArr
  //   chunkedArr.push(arr.slice(i, i + len));
  //   //Increment by chunk length
  //   i += len;
  // }
  // return chunkedArr;
  //////////
  //way 2: with forEach() method
  //init chunked arr
  const chunkedArr = [];
  // loop through arr
  arr.forEach((val) => {
    //get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //check if last and if last length is equal to the chunk length(len)
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

//////////////////////////////////
//CHALLENGE 3: FLATTEN ARRAY
//take an array of arrays and flatten to a single array
function flattenArrar(arrays) {
  //solution 1. with flat(method), with passed in 'Infinity' to make deep flattening, in case of multiple  nested arrays
  // return arrays.flat(Infinity);
  ////////////
  //solution 2: with reduce(), only flattens one layer nested arrays
  // return arrays.reduce((a, b) => {
  //   return a.concat(b);
  // });
  ////////////
  //solution 3: with apply(), only flattens one layer nested arrays
  // return [].concat.apply([], arrays);
  ////////////
  //solution 4: with spread operator, only flattens one layer nested arrays
  return [].concat(...arrays);
}

//////////////////////////////////
//////////////////////////////////
//functions calls
console.log(logestWord("hello, world, hi"));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(flattenArrar([[1, 2], [3, [3, 4], 4], [5, 6], [7]]));

//push a new arr into an array
// const arr1 = ["hello"];
// arr1.push([1]);
// console.log(arr1);
