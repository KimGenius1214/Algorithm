const n = 435335;

function solution(n) {
  let answer = [];
  for (const i of String(n)) {
    answer.push(i);
  }
  let res = answer.join("").split("").reverse();
  let newRes = [];
  for (const i of res) {
    newRes.push(Number(i));
  }
  console.log(newRes);
  return newRes;
}

solution(n);
