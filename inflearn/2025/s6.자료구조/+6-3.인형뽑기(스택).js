function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((mov) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][mov - 1] !== 0) {
        const tmp = board[i][mov - 1];
        board[i][mov - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  });

  return answer;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((mov) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][mov - 1] !== 0) {
        const temp = board[i][mov - 1];
        board[i][mov - 1] = 0;
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
      }
    }
  });

  return answer;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((mov) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][mov - 1] !== 0) {
        const tmp = board[i][mov - 1];
        board[i][mov - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
      }
    }
  });
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
