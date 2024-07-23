function solution(s){  
    let answer;
    let len = s.length;
    let mid = Math.floor(len / 2)
    if(len % 2 === 0){
        answer = s.substring(mid - 1, mid + 1)
    }else {
        answer = s.substring(mid, mid + 1)
    }
    
    return answer;
}
console.log(solution("study"));