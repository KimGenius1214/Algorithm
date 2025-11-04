function solution(k, arr) {
  let answer = 0;
  let n = arr.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const array = Array.from(set);
  array.sort((a, b) => b - a);
  answer = array[k - 1] || -1;
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
