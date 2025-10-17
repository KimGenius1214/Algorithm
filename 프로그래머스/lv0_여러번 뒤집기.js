function solution(my_string, queries) {
  var answer = my_string.split("");
  let result = "";
  for (const i of queries) {
    let num = i[1] - i[0];
    result = answer.slice(i[0], i[1] + 1).reverse();
    answer.splice(i[0], num + 1);
    answer.splice(i[0], 0, ...result);
  }
  return answer.join("");
}

function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}
