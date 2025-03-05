function solution(code) {
  var answer = "";
  let mode = 0;
  for (let idx = 0; idx < code.length; idx++) {
    if (mode === 0) {
      if (code[idx] !== "1") {
        if (idx % 2 === 0) {
          answer += code[idx];
        }
      } else {
        mode = 1;
        continue;
      }
    }
    if (mode === 1) {
      if (code[idx] !== "1") {
        if (idx % 2 === 1) {
          answer += code[idx];
        }
      } else {
        mode = 0;
        continue;
      }
    }
  }
  return answer || "EMPTY";
}
