function solution(s){  
    let answer="";
    for(const i of s){
        if(i.toUpperCase() === i){
            answer += i.toLowerCase();
        }else {
            answer += i.toUpperCase();
        }
    }
    return answer;
}

function solution(s){  
    let answer="";
    for(const i of s){
        let num = i.charCodeAt();
        if(num > 65 && num <= 90){
            answer += String.fromCharCode(num + 32)
        }else {
            answer += String.fromCharCode(num - 32)
        }
    }
    return answer;
}

console.log(solution("StuDY"));
