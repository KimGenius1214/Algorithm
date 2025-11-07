function solution(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[i] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
