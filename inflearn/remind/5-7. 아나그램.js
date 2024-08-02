function solution(str1, str2){
    let answer="YES"; 
    let map = new Map();
    for(const i of str1){
        if(map.has(i)){
            map.set(i, map.get(i) + 1);
        }else {
            map.set(i, 1);
        }
    }
    for(const i of str2){
        if(!map.has(i) || map.get(i) === 0) answer = "NO";
        map.set(i, map.get(i) - 1)
    }
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));