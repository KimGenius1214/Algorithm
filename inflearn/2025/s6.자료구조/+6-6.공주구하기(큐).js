function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}

let n = 8;
let k = 3;

console.log(solution(n, k));
