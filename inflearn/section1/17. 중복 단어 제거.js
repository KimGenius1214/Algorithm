function solution(s){  
    let answer = [];
    for(const i of s){
        if(!answer.includes(i)) answer.push(i);
    }
    // answer = s.filter((v, i) => s.indexOf(v) === i)
    
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
