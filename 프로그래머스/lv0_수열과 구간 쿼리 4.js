function solution(arr, queries) {
  for (const i of queries) {
    const [s, e, k] = i;
    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }

  return arr;
}
