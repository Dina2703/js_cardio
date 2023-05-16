//CHALLENGE 2: VALIDATE A PALINDROME
//return true if palindrom and false if not
//way -1 . reverse the string and come it with the original
function isPalindrom(str) {
  let reverseStr = str.split("").reverse().join("");
  return str.toLowerCase() === reverseStr.toLowerCase();
}
///////////////////////////////

//CHALLENGE 2; REVERSE AN INTEGER
//reverse an integer.
// Math.sign(int)retuns whether a number is negative, positive or zero. If the number is positive, this method returns 1. If the number is negative, it returns -1.

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(int);
}

//CHALLENGE 4.1: CAPITALIZE a word

//way 1
function capitalizeLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//CHALLENGE 4.2: CAPITALIZE each word in a sentence
///////////////////////////

function capitalizeLetters(str) {
  //way 1. using old version of FOR loop
  // //make all word in lowercase, then convert the string into an array
  // const strArr = str.toLowerCase().split(" ");
  // //capitalize the first char of each word (each item of an array)
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // //convert the array back into a string
  // return strArr.join(" ");
  //way 2. using new modern way, map().THE BEST ONE
  return str
    .toLowerCase()
    .split(" ")
    .map((each) => each.charAt(0).toUpperCase() + each.slice(1))
    .join(" ");
  ///////////////////////////////
  //way 3. using replace() method that takes in  a regular expression(regex)
  // return str.replace(/\b[a-z]/gi, (char) => {
  //   return char.toUpperCase();
  // });
}
//call function
console.log(isPalindrom("maM")); //palindrom
console.log(reverseInt(-123)); //reverse an integer
console.log(capitalizeLetter("wow wow")); //capitalize
console.log(capitalizeLetters("i love javascript ")); //capitalize
