function solution(array, commands) {
  var answer = [];
  let arr = [];
  for (const i of commands) {
    arr = array.slice(i[0] - 1, i[1]);
    arr.sort((a, b) => a - b);
    console.log(arr);
    answer.push(arr[i[2] - 1]);
  }
  return answer;
}
