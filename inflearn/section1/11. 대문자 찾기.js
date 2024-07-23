function solution(s){         
    let answer=0;
    for(const i of s){
        if(i.toUpperCase() === i){
            answer++;
        }
    }
    return answer;
}

function solution(s){         
    let answer=0;
    for(const i of s){
        let num = i.charCodeAt();
        if(num > 65 && num <= 90) answer++;
    }
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));