function solution(n) {
  let num = 1;
  while (true) {
    if (n < factorial(num)) {
      num--;
      break;
    } else {
      num++;
    }
  }
  return num;
}

function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}
