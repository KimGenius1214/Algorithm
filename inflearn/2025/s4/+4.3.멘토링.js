function solution(n, m, tests) {
  let count = 0;

  // 1단계: 모든 가능한 멘토-멘티 쌍을 확인
  // i = 멘토 후보 (1번 학생부터 n번 학생까지)
  for (let mentor = 1; mentor <= n; mentor++) {
    // j = 멘티 후보 (1번 학생부터 n번 학생까지)
    for (let mentee = 1; mentee <= n; mentee++) {
      // 자기 자신은 멘토-멘티가 될 수 없음
      if (mentor === mentee) continue;

      // 2단계: 이 쌍이 모든 테스트에서 조건을 만족하는지 확인
      let isValid = true;

      // M번의 모든 테스트를 확인
      for (let test = 0; test < m; test++) {
        let mentorRank = -1; // 멘토의 등수
        let menteeRank = -1; // 멘티의 등수

        // 3단계: 이번 테스트에서 멘토와 멘티의 등수 찾기
        for (let rank = 0; rank < n; rank++) {
          if (tests[test][rank] === mentor) {
            mentorRank = rank; // rank가 작을수록 등수가 높음
          }
          if (tests[test][rank] === mentee) {
            menteeRank = rank;
          }
        }

        // 4단계: 멘토의 등수가 멘티보다 낮으면(뒤지면) 실격
        if (mentorRank > menteeRank) {
          isValid = false;
          break; // 한 번이라도 뒤지면 더 볼 필요 없음
        }
      }

      // 5단계: 모든 테스트를 통과하면 카운트 증가
      if (isValid) {
        count++;
      }
    }
  }

  return count;
}

// 입력 처리 예제
const n = 4;
const m = 3;
const tests = [
  [3, 4, 1, 2], // 1번 테스트 결과
  [4, 3, 2, 1], // 2번 테스트 결과
  [3, 1, 4, 2], // 3번 테스트 결과
];

console.log(solution(n, m, tests)); // 출력: 3
