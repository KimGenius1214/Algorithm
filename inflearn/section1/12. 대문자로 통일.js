function solution(s){         
    let answer="";
    answer = s.toUpperCase()
    return answer;
}

function solution(s){         
    let answer="";
    for(const i of s){
        let num = i.charCodeAt();
        if(num >= 97 && num <= 122) answer += String.fromCharCode(num-32);
    }
    return answer;
}

let str="ItisTimeToStudy";
console.log(solution(str));