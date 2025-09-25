function solution(arr) {
  var answer = [[]];
  let arrLen = arr.length;
  let itemLen = arr[0].length;

  if (arrLen > itemLen) {
    let newArr = [];
    for (const i of arr) {
      for (let j = 0; j < arrLen - itemLen; j++) {
        i.push(0);
      }
      newArr.push(i);
    }
    answer = newArr;
  } else if (itemLen > arrLen) {
    for (let i = 0; i < itemLen - arrLen; i++) {
      arr.push(Array(itemLen).fill(0));
    }
    answer = arr;
  } else {
    answer = arr;
  }
  return answer;
}

function solution(arr) {
  const col = arr[0].length,
    row = arr.length;
  if (row === col) return arr;
  else if (row > col) {
    return Array.from(arr, (v) => [...v, ...new Array(row - col).fill(0)]);
  } else {
    return Array.from(new Array(col), (_, i) =>
      i < row ? [...arr[i]] : new Array(col).fill(0)
    );
  }
}
