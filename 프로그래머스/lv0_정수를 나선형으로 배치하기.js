function solution(n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let num = 1;
  let startRow = 0,
    startCol = 0;
  let endRow = n - 1,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = num;
      num++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = num;
      num++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = num;
      num++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = num;
      num++;
    }
    startCol++;
  }
  return arr;
}
