const arr = [1, 1, 3, 3, 0, 1, 1];
function solution(arr) {
  var answer = [];
  const newSet = new Set(arr);

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log(Array(newSet));

  return answer;
}

solution(arr);
