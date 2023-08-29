function solution(my_string) {
  my_string = "Bcad";
  var answer = "";
  let newAnswer = my_string.toLowerCase();
  answer = splitAndSort(newAnswer);
  return answer;
}

function splitAndSort(str) {
  return str.split("").sort().join("");
}

solution();

("");
