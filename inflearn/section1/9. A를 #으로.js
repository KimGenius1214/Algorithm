function solution(s){
    let answer="";
    for(const i of s){
        if(i === 'A'){
            answer += '#'
        }else {
            answer += i
        }
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));