function solution(m, arr) {
  let left = Math.max([...arr]);
  let right = arr.reduce((a, b) => a + b);
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(arr, mid, m)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

function canDivide(songs, dvdSize, m) {
  let dvdCount = 1;
  let currentSum = 0;

  for (const song of songs) {
    if (currentSum + sum > dvdSize) {
      currentSum = song;
      dvdCount++;
    } else {
      currentSum += song;
    }
  }
  return dvdCount <= m;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(3, arr));
