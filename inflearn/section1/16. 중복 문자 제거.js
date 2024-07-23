function solution(s){  
    let answer="";
    for(const i of s){
        if(answer.indexOf(i) === -1){
            answer += i;
        }
    }
 
    return answer;
}

function solution(s){  
    let answer="";
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === i){
            answer += s[i];
        }
    }
 
    return answer;
}

// 특정 문자 찾기
function solution(s){  
    let answer=0;
    let pos = s.indexOf('k')
    while(pos !== -1){
        answer++;
        pos = s.indexOf('k', pos + 1);
    }
 
    return answer;
}
console.log(solution("ksekkset"));