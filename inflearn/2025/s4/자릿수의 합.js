function solution(arr) {
  let answer = 0;
  let tempArr = [];
  for (const i of arr) {
    let num = 0;
    const str = i.toString();
    for (const j of str) {
      num += Number(j);
    }
    tempArr.push(num);
  }
  const maxNum = Math.max(...tempArr);
  const indexArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === maxNum) {
      indexArr.push(i);
    }
  }
  const newArr = [];
  for (const i of indexArr) {
    newArr.push(arr[i]);
  }
  answer = Math.max(...newArr);
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
