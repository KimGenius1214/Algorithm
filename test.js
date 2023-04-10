const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];
const { log } = console;

function solution(today, terms, privacies) {
  var answer = [];
  const termsObj = {};
  let resNum = 1;
  for (const i of terms) {
    let termsSplit = i.split(" ");
    let termsTarget = termsSplit[0];
    let termsNum = Number(termsSplit[1]);
    termsObj[termsTarget] = termsNum;
  }

  for (const i of privacies) {
    const date = new Date(today);
    let privaciesSplit = i.split(" ");
    let privaciesDate = new Date(privaciesSplit[0]);
    let privaciesTarget = privaciesSplit[1];
    let maxNum = termsObj[privaciesTarget];
    const maxMonth = new Date(
      privaciesDate.setMonth(privaciesDate.getMonth() + maxNum)
    );
    log(maxMonth, date);
    if (maxMonth <= date) {
      answer.push(resNum);
    }
    resNum += 1;
  }
  log(answer);
  return answer;
}

solution(today, terms, privacies);
