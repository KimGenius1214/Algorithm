function solution(dartResult) {
  var answer = 0;
  let num = [];
  let arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    } else if (dartResult[i] === "S") arr.push(Number(num));
    else if (dartResult[i] === "D") arr.push(Math.pow(Number(num), 2));
    else if (dartResult[i] === "T") arr.push(Math.pow(Number(num), 3));
    else if (dartResult[i] === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    } else if (dartResult[i] === "#") arr[arr.length - 1] *= -1;
  }

  return arr.reduce((a, b) => a + b, 0);
}
