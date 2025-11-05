function solution(sum, arr) {
  let count = 0;
  let p1 = 0;
  let tempSum = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    tempSum += arr[p2];

    while (tempSum > sum) {
      tempSum -= arr[p1++];
    }

    if (tempSum === sum) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, arr));
