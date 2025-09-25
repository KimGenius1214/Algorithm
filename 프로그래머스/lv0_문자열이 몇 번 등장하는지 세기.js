function solution(myString, pat) {
  let set = new Set();
  for (let i = 0; i < myString.length; i++) {
    let foundIndex = myString.indexOf(pat, i);
    if (foundIndex !== -1) {
      set.add(foundIndex);
    }
  }
  return set.size;
}

function solution(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g");
  return (myString.match(reg) || []).length;
}

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }
  return count;
}
