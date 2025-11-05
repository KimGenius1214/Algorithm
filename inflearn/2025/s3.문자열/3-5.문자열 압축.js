function solution(str) {
  let answer = "";
  const map = new Map();
  for (const i of str) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  map.forEach((value, key) => {
    answer += key + (value > 1 ? value : "");
  });
  return answer;
}

const str = "KKHSSSSSSSE";
console.log(solution(str));
