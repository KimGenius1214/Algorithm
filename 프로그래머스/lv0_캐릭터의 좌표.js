function solution(keyinput, board) {
    var answer = [0,0];
    for(const i of keyinput){
        if(i === 'left'){
            if(Math.abs(answer[0] - 1) > parseInt(board[0] / 2 )) {
                answer[0] = answer[0]
            }else {
                answer[0] = answer[0] - 1
            }
        }else if(i === 'right'){
            if(Math.abs(answer[0] + 1) > parseInt(board[0] / 2 )) {
                answer[0] = answer[0]
            }else {
                answer[0] = answer[0] + 1
            }
        }else if (i === 'up'){
                 if(Math.abs(answer[1] + 1) > parseInt(board[1] / 2 )) {
                answer[1] = answer[1]
            }else {
                answer[1] = answer[1] + 1
            }
        }else {
                   if(Math.abs(answer[1] - 1) > parseInt(board[1] / 2 )) {
                answer[1] = answer[1]
            }else {
                answer[1] = answer[1] - 1
            }
        }
    }
    return answer;
}