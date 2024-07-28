function solution(s, t){
    let answer=[];
    let min = 1000;
    for(const i of s){
        if(i === t){
            min = 0;
            answer.push(min)
        }else {
            min++;
            answer.push(min)
        }
    }
    min = 1000;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === t) min = 0;
        else{
            min++;
            answer[i] = Math.min(answer[i], min);
        }
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));