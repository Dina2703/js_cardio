//CHALLENGE 3: SEEK $ DESTROY
//remove from the array whatever is in the following arguments. Return the leftover values in an array
//ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello]

function seekAndDestroy(arr, ...deleteList) {
  //solution 1: ...rest operator & filter()
  return arr.filter((item) => !deleteList.includes(item));
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
x;
