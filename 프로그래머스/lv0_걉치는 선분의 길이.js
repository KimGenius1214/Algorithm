// 채점 시 실패
function solution(lines) {
  const arr = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i][1] > lines[i + 1][0] && lines[i][1] < lines[i + 1][1]) {
      for (let j = lines[i + 1][0]; j < lines[i][1]; j++) {
        if (!arr.includes(j)) arr.push(j);
      }
    }
  }
  return arr.length;
}

function solution(lines) {
  const start = Math.min(...lines.flat());
  const end = Math.max(...lines.flat());
  const lst = [...Array(end - start)].fill(0);

  lines.forEach((el) => {
    for (let i = el[0]; i < el[1]; i++) {
      lst[i - start] += 1;
    }
  });
  return lst.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

const solution = (lines) => {
  const stage = new Set();
  const overlapped = new Set();
  lines.forEach(([start, end]) => {
    for (let num = start; num < end; num++) {
      if (stage.has(num)) {
        overlapped.add(num);
      }
      stage.add(num);
    }
  });
  const answer = overlapped.size;
  return answer;
};
