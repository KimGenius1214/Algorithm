function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let end = 0;
  for (const i of arr) {
    if (i[0] >= end) {
      answer++;
      end = i[1];
    }
  }
  return answer;
}

function solution(arr) {
  arr.sort((a, b) => a[1] - b[1]);

  let selected = [arr[0]];
  let lastEnd = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= lastEnd) {
      selected.push(arr[i]);
      lastEnd = arr[i][1];
    }
  }
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

console.log(solution(arr));
