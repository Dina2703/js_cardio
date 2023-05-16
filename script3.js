//CHALLENGE 5: MAX CHARACTER
//return the character that is most common in a string

function maxCharacter(str) {
  //create an object as a map
  const charMap = {};
  let maxNumber = 0;
  let maxChar = "";

  //loop trough a string as an array
  str.split("").forEach((char) => {
    //check if the char exists as a key(or property of the object add one to its value, if it's NOT, create new key and add one)
    if (charMap[char]) {
      charMap[char]++; //add one
    } else {
      charMap[char] = 1; //create new key and assign 1 to it.
    }
  });

  // console.log(charMap);
  //FOR IN loop is used to use for object
  for (let char in charMap) {
    if (charMap[char] > maxNumber) {
      maxNumber = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxCharacter("hello"));
