function solution(arr) {
  let max = 0;
  let num = 0;

  for (const i of arr) {
    if (i > max) {
      max = i;
      num++;
    }
  }
  return num;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
