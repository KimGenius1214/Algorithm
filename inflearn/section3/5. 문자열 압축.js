function solution(s){
    let answer="";
    let min = 1;
    s = s + " ";
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i + 1]) min++;
        else {
            answer += s[i];
            if(min > 1) answer += String(min);
            min = 1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));