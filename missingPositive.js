// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

const missingPositive = (arr) => {
  let newArr = Array.from(new Set(arr.filter((a) => a > 0))).sort(
    (a, b) => a - b
    );

    let result = [];
    for (let i = 0; i < newArr.length; i ++) {
      if (newArr[i] - newArr[i + 1] >= 2) {
        result.push(newArr[i] + 1)
      }
    }
    return result;
};

console.log(missingPositive([1, 2, -1, -2, 4, 2]))
