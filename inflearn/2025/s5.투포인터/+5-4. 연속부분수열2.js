function solution(sum, arr) {
  let count = 0;
  let p1 = 0;
  let tempSum = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    tempSum += arr[p2];
    while (tempSum > sum) {
      tempSum -= arr[p1++];
    }
    count += p2 - p1 + 1;
  }
  return count;
}

let arr = [1, 3, 1, 2, 3];

console.log(solution(5, arr));
