function solution(str1, str2) {
  let count = 0;
  let len1 = str1.length;
  let len2 = str2.length;
  let subStr = "";
  for (let i = 0; i < len2; i++) {
    subStr += str1[i];
  }
  if (isSameAnagram(subStr, str2)) {
    count++;
  }
  for (let right = len2; right < len1; right++) {
    subStr = subStr.substring(1, len2);
    subStr += str1[right];
    if (isSameAnagram(subStr, str2)) {
      count++;
    }
  }
  return count;
}

function isSameAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = new Map();
  for (const i of str1) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (const i of str2) {
    const count = map.get(i) || 0;

    if (count === 0) {
      return false;
    }

    map.set(i, count - 1);
  }

  return true;
}

let str1 = "bacaAacba";
let str2 = "abc";
console.log(solution(str1, str2));
