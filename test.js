const arr = [4, 4, 4, 3, 3];
function solution(arr) {
  var answer = [];
  arr.forEach((e) => {
    if (answer.length > 0 && answer[answer.length - 1] !== e) {
      answer.push(e);
    } else if (answer.length === 0) answer.push(arr[0]);
  });
  console.log(answer);
}

solution(arr);
