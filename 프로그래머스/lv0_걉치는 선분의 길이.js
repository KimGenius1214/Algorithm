// 채점 시 실패패
// function solution(lines) {
//     const arr = [];
//     for(let i = 0; i < lines.length -1; i++){
//         if(lines[i][1] > lines[i+1][0] && lines[i][1] < lines[i+1][1]) {
//             for(let j = lines[i+1][0]; j < lines[i][1]; j++){
//                 if(!arr.includes(j)) arr.push(j)
//             }
//         }
//     }
//     console.log(arr);
//     return arr.length;
// }

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
