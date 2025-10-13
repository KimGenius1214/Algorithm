function solution(arr, queries) {
  var answer = [];
  for (const j of queries) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (j[0] <= i && i <= j[1] && j[2] < arr[i]) {
        temp.push(arr[i]);
      }
    }
    answer.push(temp.length ? Math.min(...temp) : -1);
  }

  return answer;
}
