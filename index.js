function solution(str1, str2) {
  let count = 0;
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 < len2) return 0;

  const tmap = new Map();
  const wmap = new Map();

  for (const i of str2) {
    tmap.set(i, (tmap.get(i) || 0) + 1);
  }

  for (let i = 0; i < len2; i++) {
    wmap.set(str1[i], (wmap.get(str1[i]) || 0) + 1);
  }

  if (isSameMap(tmap, wmap)) count++;

  for (let i = len2; i < len1; i++) {
    let left = i - len2;

    wmap.set(str1[left], wmap.get(str1[left]) - 1);
    if (wmap.get(str1[left]) === 0) {
      wmap.delete(str1[left]);
    }

    wmap.set(str1[i], (wmap.get(str1[i]) || 0) + 1);
    if (isSameMap(tmap, wmap)) count++;
  }

  return count;
}

function isSameMap(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
}

let str1 = "bacaAacba";
let str2 = "abc";
console.log(solution(str1, str2));
