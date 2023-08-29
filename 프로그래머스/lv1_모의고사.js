function solution(answers) {
  let one = "12345"
    .repeat(answers.length)
    .split("")
    .map((v) => v * 1);
  let two = "21232425"
    .repeat(answers.length)
    .split("")
    .map((v) => v * 1);
  let three = "3311224455"
    .repeat(answers.length)
    .split("")
    .map((v) => v * 1);

  let corr1 = answers.filter((v, i) => v === one[i]).length;
  let corr2 = answers.filter((v, i) => v === two[i]).length;
  let corr3 = answers.filter((v, i) => v === three[i]).length;

  let correct = [corr1, corr2, corr3];

  return [1, 2, 3].filter((v, i) => correct[i] === Math.max(...correct));
}
