function solution(s){
    let answer="YES";
    let res = s.toLowerCase().split("").reverse().join("");
    if(s.toLowerCase() !== res) answer = "NO";
    return answer;
}

function solution(s){
    let answer = "YES";
    s = s.toLowerCase();
    let n = s.length;
    for(let i = 0; i < Math.floor(n/2); i++){
        if(s[i] != s[n-i-1]) return "NO";
    }
    return answer;
}

let str="goooG";
console.log(solution(str));