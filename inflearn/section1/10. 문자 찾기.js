function solution(s, t){
    let answer=0;
    for(const i of s){
        if(i === t) answer++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));