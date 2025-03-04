function solution(myString) {
  var answer = [];
  let len = [];
  answer = myString.split("x");
  for (const i of answer) {
    len.push(i.length);
  }
  return len;
}
