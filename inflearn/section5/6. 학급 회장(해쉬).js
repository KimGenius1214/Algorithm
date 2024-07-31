function solution(s){  
    let answer;
    let map = new Map();
    let max = 0;
    for(const i of s){
        if(!map.has(i)){
            map.set(i, 1)
        }else {
            const num = Number(map.get(i)) + 1;            
            map.set(i, num);
        }
    }
    map.forEach((a, b) => {
        if(a > max){
            answer = b;
            max = a;
        }
    })
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));