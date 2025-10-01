function solution(picture, k) {
  var answer = [];
  for (const i of picture) {
    const temp = [];
    let str = "";
    for (let j = 0; j < i.length; j++) {
      for (let l = 0; l < k; l++) {
        str += i[j];
      }
    }
    for (let m = 0; m < k; m++) {
      temp.push(str);
    }
    answer.push(temp);
  }
  return answer.flat();
}

function solution(picture, k) {
  let result = [];

  picture.map((v) => {
    const cur = [...v].map((c) => c.repeat(k)).join("");
    for (let i = 0; i < k; i++) result.push(cur);
  });

  return result;
}
