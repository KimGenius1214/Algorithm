function solution(s){
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    let res = s.split("").reverse().join("");
    if(s !== res) answer = "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));