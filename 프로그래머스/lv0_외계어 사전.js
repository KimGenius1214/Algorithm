function solution(spell, dic) {
  var answer = 2;
  for (const i of dic) {
    let num = 0;
    for (let j = 0; j < spell.length; j++) {
      if (i.includes(spell[j])) {
        num++;
      }
    }
    if (num === spell.length) {
      answer = 1;
    }
  }
  return answer;
}

function solution(spell, dic) {
  return dic.filter((d) => spell.every((s) => d.includes(s))).length ? 1 : 2;
}
