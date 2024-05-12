function solution(a, d, included) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < included.length; i++) {
    if (arr.length === 0) {
      arr.push(a);
    } else {
      arr.push(arr[i - 1] + d);
    }
  }
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += arr[i];
    }
  }
  return answer;
}
