function solution(n, arr) {
  let answer = "";
  let maxNum = 0;
  let map = new Map();
  for (const i of arr) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  map.forEach((value, key) => {
    if (value > maxNum) {
      maxNum = value;
      answer = key;
    }
  });
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(15, str));
