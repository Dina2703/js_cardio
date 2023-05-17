//CHALLENGE 3: SEEK $ DESTROY
//remove from the array whatever is in the following arguments. Return the leftover values in an array
//ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello]

function seekAndDestroy(arr, ...deleteList) {
  //solution 1: ...rest operator & filter()
  return arr.filter((item) => !deleteList.includes(item));
}

////////////////////////////
//CHALLENGE 4: SORT $ HEIGHT
//some people are standing in a row in a park. there are trees between them which cannot be moved.You task is to rearrange the people by their heights in a non-descending order without moving the trees.
//ex. -1 are trees, positive numbers represent people heights. a = [-1, 100, 160, -1, 130, 180]: sortByHeight(a) == [-1, 100, 130, -1, 160, -1, 180]

function sortByHeight(a) {
  //create 2 arrays: arr1 for tree(-1) indexes to fix their index place and arr2 for heights, like arr1==[ 0, 3, 4 ] & arr2==[ 100, 160, 130, 180 ]
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => {
    val === -1 ? arr1.push(i) : arr2.push(val);
  });
  // console.log(arr1, arr2);
  const sorted = arr2.sort();
  //the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements. splice(arr1[i], 0, -1)) - means at arr1[i] position  put value '-1'. 0 as a second param, since we're not removing anything, just adding.
  arr1.forEach((val, i) => sorted.splice(arr1[i], 0, -1));
  return sorted;
}
////////////////////////////
////////////////////////////
//function calls
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
console.log(sortByHeight([-1, 100, 160, -1, -1, 130, 180]));
