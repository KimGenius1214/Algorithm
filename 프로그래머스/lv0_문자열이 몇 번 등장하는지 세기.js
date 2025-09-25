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
