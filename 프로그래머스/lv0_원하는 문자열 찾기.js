function solution(myString, pat) {
  var answer = 0;
  if (myString.toLocaleUpperCase().includes(pat.toLocaleUpperCase())) {
    answer = 1;
  }
  return answer;
}
