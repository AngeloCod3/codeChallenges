function finder(k) {
  const arr = [10, 15, 7, 3];

  const newArr = [];
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
      while (j <= arr.length) {
      newArr.push(arr[i] + arr[j]);
      console.log(j)
      j == 3 ? j = 1 :
      j++
    }
  }

  return newArr.includes(k);
}

console.log(finder(23));
