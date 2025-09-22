function solution(arr) {
  let answer = 0;
  let flag = true;

  while (flag) {
    flag = false;

    const nextArr = arr.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        return v / 2;
      }

      if (v < 50 && v % 2 === 1) {
        return v * 2 + 1;
      }

      return v;
    });

    for (let i = 0; i < arr.length; i++) {
      if (nextArr[i] !== arr[i]) {
        flag = true;
        answer++;
        arr = nextArr;
        break;
      }
    }
  }

  return answer;
}
