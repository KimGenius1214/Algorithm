function solution(s) {
  let arr = [];
  for (const i of s) {
    if (s.indexOf(i) === s.lastIndexOf(i)) {
      arr.push(i);
    }
  }
  return arr.sort().join("");
}
function solution(s) {
  let ans = [];

  let sArr = s.split("");

  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      ans.push(item);
    }
  });

  return ans.sort().join("");
}
