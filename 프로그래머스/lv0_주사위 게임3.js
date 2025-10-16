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

function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}
