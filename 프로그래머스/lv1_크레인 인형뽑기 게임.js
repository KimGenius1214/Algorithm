function solution(board, moves) {
  var answer = 0;
  let arr = [];
  let curr = 0;

  for (let i = 0; i < moves.length; i++) {
    let temp = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][temp] != 0) {
        if (arr[arr.length - 1] === board[j][temp]) {
          arr.pop();
          answer += 2;
        } else {
          arr.push(board[j][temp]);
        }
        board[j][temp] = 0;
        break;
      }
    }
  }

  return answer;
}
