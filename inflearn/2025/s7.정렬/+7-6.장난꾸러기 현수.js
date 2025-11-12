function solution(arr) {
  let answer = [];
  let sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i);
  }

  return answer;
}

function solution(arr) {
  let answer = [];
  let sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i);
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];

console.log(solution(arr));
