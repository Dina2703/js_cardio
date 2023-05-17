//CHALLENGE 1: ADD ALL NUMBERS
//return a value of all parametersentered regarless of the amount of numbers - NO ARRAYS
//ex addAll(2, 5, 7) === 14

//SOLUTION 1: with ES5/old way, using arguments and for loop
function addAll(numbers) {
  //copy all numbers that passed in into an array.Ex: input: addAll(2, 5, 6), output: [ 2, 5, 6 ]
  var args = Array.prototype.slice.call(arguments);
  //add each number
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

//SOLUTION 2: with ES6/ using ...rest operator & forOf & reduce() methods. ...numbers gathering the remaining parameters into an array. input:addAll2(2, 5, 6), output: [ 2, 5, 6 ]
function addAll2(...numbers) {
  //with for of loop
  // let total = 0;
  // for (number of numbers) {
  //   total += number;
  // }
  // return total;
  //////////
  //with reduce()
  return numbers.reduce((accumulator, currentNum) => accumulator + currentNum);
}

/////////////////////////////////////

//CHALLENGE 2: SUMM ALL PRIMES
//Pass in a number to loop up to and add all of the prime numbers.
//A prime numbers is a whole number greater than 1 whose only factors are 1 and itself(2, 3, 5, 7 ,etc) ex: sumAllPrimes(10) output is 17

function summAllPrimes(number) {
  //my helper func
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  let total = 0;
  for (let i = 2; i <= number; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}
/////////////////////////////////////
/////////////////////////////////////

//function calls
console.log(addAll(2, 5, 6));
console.log(addAll2(2, 5, 6));
console.log(summAllPrimes(10));
