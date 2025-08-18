function solution(balls, share) {
  function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
  var answer = 0;
  answer = Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
  return answer;
}
