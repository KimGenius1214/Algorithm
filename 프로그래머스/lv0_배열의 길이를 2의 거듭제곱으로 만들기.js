function solution(arr) {
  var answer = arr;
  function powerOfTwo(num) {
    // 예외처리
    // num이 1이거나 2의 배수가 아닌 경우
    if (num === 1) return true;
    if (num % 2) return false;

    // 거듭제곱을 만드는 while문
    // 확인하기 위한 범위 ( < num )
    let powered = 2;
    while (powered < num) {
      powered = powered * 2;
    }

    return powered === num;
  }

  while (!powerOfTwo(arr.length)) {
    answer.push(0);
  }
  return answer;
}
