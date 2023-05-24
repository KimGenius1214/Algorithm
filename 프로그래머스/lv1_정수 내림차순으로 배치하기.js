const n = 118372;

function solution(n) {
  let res = String(n)
    .split("")
    .sort((a, b) => {
      return Number(b) - Number(a);
    });
  return Number(res.join(""));
}

solution(n);
