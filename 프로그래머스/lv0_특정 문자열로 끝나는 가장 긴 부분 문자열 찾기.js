function solution(myString, pat) {
  let lastIndex = myString.lastIndexOf(pat);
  const answer = myString.slice(0, lastIndex + pat.length);
  return answer;
}
