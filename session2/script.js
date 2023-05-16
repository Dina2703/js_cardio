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
console.log(logestWord("hello, world, hi"));
