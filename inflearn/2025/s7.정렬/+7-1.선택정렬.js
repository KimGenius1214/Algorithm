function solution(arr) {
  let answer = arr;
  let n = answer.length;

  for (let i = 0; i < n - 1; i++) {
    let idx = i;

    for (let j = i + 1; j < n; j++) {
      if (answer[j] < answer[idx]) {
        idx = j;
      }
    }

    if (i !== idx) {
      [answer[idx], answer[i]] = [answer[i], answer[idx]];
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
