function solution(str_list) {
  var answer = [];
  const index = str_list.findIndex((item) => item === "l" || item === "r");

  if (index === -1) {
    return answer;
  } else if (str_list[index] === "l") {
    answer = str_list.slice(0, index);
  } else {
    answer = str_list.slice(index + 1);
  }
  return answer;
}
