// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function product(arr) {
  const newArr = [];

  arr.forEach((el, i, array) => {
    newArr.push(
      arr.filter((item) => item !== array[i]).reduce((a, b) => a * b)
    );
  });
  //   **************************
  //First Code that I wrote

  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(arr.filter(item => item !== arr[i]).reduce((a,b) => a * b));
  //   }
  //   ************************
  return newArr;
}

console.time("time");
console.log(product([1, 2, 3, 4, 5]));
console.timeEnd("time");
