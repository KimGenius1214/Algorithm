function solution(s){  
    let answer;
    let map = new Map();
    let max = 0;
    for(const i of s){
        if(map.has(i)){
            map.set(i, map.get(i) + 1);
        }else {
            map.set(i, 1);
        }
    }
    for(let [key, value] of map){
        if(max < value){
            max = value;
            answer = key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));