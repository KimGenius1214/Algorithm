function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let len=s.length;
    for(let i = 0; i < Math.floor(len / 2); i++){
        if(s[i] !== s[len - i - 1]) answer = 'NO'
    }
    return answer;
}

function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    if(s.split('').reverse().join('')!=s) return "NO";    
    return answer;
}

let str="goooG";
console.log(solution(str));