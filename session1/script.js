// console.log("hello");
//CHALLENGE 1:  REVERSE A STRING
function reverseString(str) {
  //way-1
  // return str.split("").reverse().join("");

  ///////////////////////////////

  //way-2 without reverse() method
  // let revString = "";
  // //array starts from 0 and latest element is accessible by length-1
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  //   return revString;
  // }

  //////////////////////////////

  //way-3
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  //////////////////////////////

  //way-4. using ES-6
  // let revString = "";
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  /////////////////////////////////

  //way-5. using forEach() -the high order array method
  // let revStr = "";
  // //first convert a string into an array, use spread operator or split('') method
  // [...str].forEach((char) => (revStr = char + revStr));
  // return revStr;

  ///////////////////////////////////

  //way-6. using another high order array method reduce()
  return str.split("").reduce((revStr, char) => char + revStr, "");
}

console.log(reverseString("world"));
//console.log("hello".split("")); //separate each char
//console.log("hello world".split(" ")); //to separate each word
//You can access each char of a string
// const word = "hi";
// console.log(word[0]);
// let string = "h";
// console.log("o" + string);
