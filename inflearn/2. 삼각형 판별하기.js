function solution(a, b, c){
    let max = 0;
    const total = a + b + c;
    if(a < b){
        max = b
    }else {
        max = a
    }
    if(c > max){
        max = c
    }
    return (total - max <= max) ? "NO" : "YES"
}

// console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));