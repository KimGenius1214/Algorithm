function solution(budget, gift) {
  let answer = 0;
  const n = gift.length;

  gift.sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];
    return totalA - totalB;
  });

  for (let discountIndex = 0; discountIndex < n; discountIndex++) {
    let tempBudget = budget;
    let count = 0;

    const [price, delivery] = gift[discountIndex];
    const discountPrice = price / 2 + delivery;

    if (tempBudget < discountPrice) {
      continue;
    }

    tempBudget -= discountPrice;
    count++;

    for (let i = 0; i < n; i++) {
      if (discountIndex === i) continue;

      const normalPrice = gift[i][0] + gift[i][1];

      if (tempBudget >= normalPrice) {
        tempBudget -= normalPrice;
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

function solution(budget, arr) {
  let answer = 0;
  let n = arr.length;

  budget.sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];
    return totalA + totalB;
  });

  for (let discountIndex = 0; discountIndex < n; discountIndex++) {
    let tempBudget = budget;
    let count = 0;

    let [price, delivery] = arr[discountIndex];
    let discountPrice = price / 2 + delivery;

    if (discountPrice > tempBudget) continue;

    tempBudget -= discountPrice;
    count++;

    for (let i = 0; i < n; i++) {
      if (discountIndex === i) continue;

      let totalPrice = arr[i][0] + arr[i][1];

      if (tempBudget >= totalPrice) {
        tempBudget -= totalPrice;
        count++;
      }
    }

    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
