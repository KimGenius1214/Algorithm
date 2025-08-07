function solution(n) {
  var answer = 0;
  function divisor(num) {
    let result = [];
    let index = 1;

    while (index <= num) {
      if (num % index === 0) result.push(index);
      index++;
    }
    return result;
  }

  for (let i = 1; i <= n; i++) {
    if (divisor(i).length >= 3) {
      answer++;
    }
  }
  return answer;
}
