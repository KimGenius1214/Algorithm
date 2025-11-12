function solution(arr) {
  let events = [];
  for (const [arrive, leave] of arr) {
    events.push([arrive, 1]);
    events.push([leave, -1]);
  }
  events.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let current = 0;
  let maxCount = 0;

  for (const [time, change] of events) {
    current += change;
    maxCount = Math.max(maxCount, change);
  }

  return maxCount;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(arr));
