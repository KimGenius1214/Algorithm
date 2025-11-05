function solution(arr) {
  let num = 1;
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (arr[i] === 1 && arr[i - 1] === 1) {
        num++;
      }
      answer += num;
    } else {
      num = 1;
    }
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
