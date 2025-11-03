function solution(n, m, arr) {
  let answer = 0;
  for (let mentor = 1; mentor <= n; mentor++) {
    for (let mentee = 1; mentee <= m; mentee++) {
      if (mentor === mentee) continue;
      let isValid = true;

      for (let test = 0; test < m; test++) {
        let mentorRank = -1;
        let menteeRank = -1;

        for (let rank = 0; rank < n; rank++) {
          if (arr[test][rank] === mentor) {
            mentorRank = rank;
          }
          if (arr[test][rank] === mentee) {
            menteeRank = rank;
          }
        }

        if (mentorRank > menteeRank) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));
