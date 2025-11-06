// function solution(str1, str2) {
//   if (str1.length !== str2.length) return "NO";

//   let map = new Map();
//   for (const i of str1) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   for (const i of str2) {
//     if (!map.get(i) || map.get(i) === 0) {
//       return "NO";
//     }
//     map.set(i, map.get(i) - 1);
//   }

//   return "YES";
// }

function solution(str1, str2) {
  if (str1.length !== str2.length) return "NO";

  let map = new Map();
  for (const i of str1) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (const i of str2) {
    const count = map.get(i) || 0;

    if (count === 0) {
      return "NO";
    }

    map.set(i, count - 1);
  }

  return "YES";
}

let str1 = "abaCC";
let str2 = "Caaab";
console.log(solution(str1, str2));
