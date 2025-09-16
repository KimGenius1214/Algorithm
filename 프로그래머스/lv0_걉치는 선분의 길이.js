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
  const arr = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i][1] > lines[i + 1][0] && lines[i][1] < lines[i + 1][1]) {
      for (let j = lines[i + 1][0]; j < lines[i][1]; j++) {
        if (!arr.includes(j)) arr.push(j);
      }
    }
  }
  console.log(arr);
  return arr.length;
}
