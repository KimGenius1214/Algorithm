function solution(m, arr) {
  let lt = 0;
  let rt = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === m) {
      return mid + 1;
    } else if (arr[mid] < m) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];

console.log(solution(32, arr));
