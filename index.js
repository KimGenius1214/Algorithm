function solution(k, arr) {
  let answer = 0;
  let n = arr.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n - i; j++) {
      for (let k = j + 1; k < n - i - k; k++) {
        console.log(k);
      }
    }
  }

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
