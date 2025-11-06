// function solution(n, arr) {
//   let answer = 0;
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//   }
//   answer = sum;
//   for (let i = n; i < arr.length; i++) {
//     sum += arr[i] - arr[i - n];
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }

function solution(n, arr) {
  let maxSum = 0;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  answer = maxSum;

  for (let i = n; i < arr.length; i++) {
    maxSum += arr[i] - arr[i - n];
    answer = Math.max(answer, maxSum);
  }

  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, arr));
