const phone_number = "01033334444";
// const phone_number = "027778888"

function solution(phone_number) {
  var answer = "";
  let len = phone_number.length;
  answer = phone_number.substring(len - 4);
  let star = "";
  for (let i = 0; i < len - 4; i++) {
    star += "*";
  }
  return star + answer;
}

solution(phone_number);
