//CHALLENGE 2: VALIDATE A PALINDROME
//return true if palidrom and false if not
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

//call function
console.log(isPalindrom("maM"));
console.log(reverseInt(-123));
