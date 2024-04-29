function solution(s) {
  let arr = [];
  for (const i of s) {
    if (s.indexOf(i) === s.lastIndexOf(i)) {
      arr.push(i);
    }
  }
  return arr.sort().join("");
}
