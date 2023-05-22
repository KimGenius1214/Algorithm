const strings = ["abce", "abcd", "cdx"];
const n = 2;
function solution(strings, n) {
  let arr = [];
  arr = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
  return arr;
}

solution(strings, n);
