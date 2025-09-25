function solution(dots) {
  // 직선의 기울기 관련 문제,
  // 직선의 기울기는 y값의 변화량 / x값의 변화량 이므로,
  const [a, b, c, d] = dots;
  if (calculationSlope(a, b) === calculationSlope(c, d)) {
    return 1;
  }
  if (calculationSlope(a, c) === calculationSlope(b, d)) {
    return 1;
  }
  if (calculationSlope(a, d) === calculationSlope(b, c)) {
    return 1;
  }
  return 0;
}

function calculationSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
