function solution(a, b) {
  const getPrime = (num) => {
    const prime = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        num = num / i;
        prime.push(i);
      }
    }
    return [...new Set(prime)];
  };

  const gcd = (num1, num2) => {
    return num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
  };

  const isInfinity = (num) => {
    let isTrue = true;
    for (const i of num) {
      if (i !== 2 && i !== 5) {
        isTrue = false;
      }
    }
    return isTrue ? 1 : 2;
  };

  const common = gcd(a, b);
  const denom = b / common;

  var answer = isInfinity(getPrime(denom));

  return answer;
}

function solution(a, b) {
  return Number((a / b).toFixed(10)) === a / b ? 1 : 2;
}
