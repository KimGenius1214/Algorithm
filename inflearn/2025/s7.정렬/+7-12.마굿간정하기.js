function solution(m, arr) {
  arr.sort((a, b) => a - b);

  let left = 1;
  let right = arr[arr.length - 1] - arr[0];
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor(left / right / 2);

    if (canPlace(arr, mid, m)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

function canPlace(arr, distance, horese) {
  let count = 1;
  let lastPos = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastPos >= distance) {
      count++;
      lastPos = arr[i];

      if (count >= horese) return true;
    }
  }

  return false;
}

let arr = [1, 2, 8, 4, 9];

console.log(solution(3, arr));
