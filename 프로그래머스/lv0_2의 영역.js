function solution(arr) {
  var answer = [];
  const firstIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);
  answer = arr.slice(firstIndex, lastIndex + 1);
  return answer.length ? answer : [-1];
}
