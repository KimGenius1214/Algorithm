const s = "pPoooyY";

function solution(s) {
  let arr = [];
  for (const i of s) {
    if (i.toLowerCase() === "y" || i.toLowerCase() === "p") {
      arr.push(i);
    }
  }
  let pnum = 0;
  let ynum = 0;
  for (const i of arr) {
    if (i.toLowerCase() === "y") {
      ynum += 1;
    } else pnum += 1;
  }
  var answer = pnum === ynum;
  console.log(pnum === ynum);

  return answer;
}
solution(s);
