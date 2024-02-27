function solution(my_string) {
  var answer = "";
  let uniqueArr = [];
  my_string.split("").forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });
  return uniqueArr.join("");
}
