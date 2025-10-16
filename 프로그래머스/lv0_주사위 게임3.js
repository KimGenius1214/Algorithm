function solution(a, b, c, d) {
  const dice = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  console.log(dice);

  const diceValue = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);

  console.log(diceValue);

  if (dice[diceValue[0]] === 4) return Number(diceValue[0]) * 1111;

  if (dice[diceValue[0]] === 3)
    return Math.pow(Number(diceValue[0]) * 10 + Number(diceValue[1]), 2);

  if (dice[diceValue[0]] == 2 && dice[diceValue[1]] === 2) {
    return (
      (Number(diceValue[0]) + Number(diceValue[1])) *
      Math.abs(Number(diceValue[0]) - Number(diceValue[1]))
    );
  }

  if (dice[diceValue[0]] === 2) {
    return Number(diceValue[1]) * Number(diceValue[2]);
  }

  return Number(diceValue[0]);
}
