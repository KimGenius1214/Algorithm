function solution(s, t){
    let answer=0;
    for(const i of s){
        if(i === t) answer++;
    }
    return answer;
}

function solution(s, t){
    let answer=s.split(t);
    // for(const i of s){
    //     if(i === t) answer++;
    // }
    
    return answer.length - 1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));