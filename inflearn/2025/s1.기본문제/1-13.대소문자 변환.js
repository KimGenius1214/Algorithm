function solution(a) {
  let num = "";
  for (const i of a) {
    // if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
    if (i.toLowerCase() === i) {
      num += i.toUpperCase();
    } else {
      num += i.toLowerCase();
    }
  }
  return num;
}
console.log(solution("StuDY"));
