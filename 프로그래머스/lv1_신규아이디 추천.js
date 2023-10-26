function solution(new_id) {
  let answer = "";
  answer = new_id.toLowerCase().replace(/[^0-9a-z-_.]/g, "");
  answer = answer.replace(/\.+/g, ".");
  answer = answer.replace(/^\.|\.$/, "");
  if (answer.length === 0) {
    answer = "a";
  }
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }
  answer = answer.replace(/\.$/, "");

  if (answer.length <= 2) {
    while (true) {
      if (answer.length === 3) {
        break;
      }
      answer += answer[answer.length - 1];
    }
  }
  return answer;
}
