function solution(n, arr1, arr2) {
  var answer = [];
  let temp1 = [];
  let temp2 = [];
  for (const i of arr1) {
    temp1.push(i.toString(2).padStart(n, "0"));
  }
  for (const i of arr2) {
    temp2.push(i.toString(2).padStart(n, "0"));
  }

  for (let i = 0; i < temp1.length; i++) {
    let str = "";
    for (let j = 0; j < temp1[i].length; j++) {
      if (temp1[i][j] === "1" || temp2[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}
