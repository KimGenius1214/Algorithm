function solution(box, n) {
  var answer = 1;
  let arr = [];
  for (const i of box) {
    const num = Math.floor(i / n);
    arr.push(num);
  }
  console.log(arr);
  for (const i of arr) {
    answer *= i;
  }
  return answer;
}
