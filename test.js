const answers = [1, 2, 3, 4, 5];
function solution(answers) {
  var answer = [];
  let arr1 = Array(answers.length);
  for (let i = 0; i < answers.length; i++) {
    arr1[i % 5] = answers[i % 5];
  }
  console.log(arr1);
  return answer;
}
solution(answers);
