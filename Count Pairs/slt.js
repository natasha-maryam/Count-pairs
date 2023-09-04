function myFunction(arr, target) {
  let pair = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      // for (let k = 1; j <= arr.length; k++) {
      if (arr[i] + arr[j] < target) {
        pair++;
      }
    }
    //}
  }
  return pair;
}
console.log(myFunction([2, 3, 5], 5));
console.log(myFunction([2, 3, 5], 8));
console.log(myFunction([2, 3, 5], 15));
