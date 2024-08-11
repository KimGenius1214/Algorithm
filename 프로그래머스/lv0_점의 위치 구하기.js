function solution(dot) {
    var answer = 0;
    if(Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === 1){
        answer = 1;
    }else if (Math.sign(dot[0]) === -1 && Math.sign(dot[1]) === 1){
        answer = 2;
    }else if (Math.sign(dot[0]) === -1 && Math.sign(dot[1]) === -1){
        answer = 3;
    }else {
        answer = 4;
    }
    return answer;
}