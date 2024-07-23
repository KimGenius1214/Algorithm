function solution(s){  
    let answer="";
    let max = s[0].length;
    for(const i of s){
        if(max < i.length){
            answer = i;
            max = i.length;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));