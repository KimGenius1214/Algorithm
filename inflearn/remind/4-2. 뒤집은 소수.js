function isPrime(num){
    if(num === 1) return false;
    for(let i = 2; i * i <= num; i++){
        if(num % i === 0) return false;
    }

    return true;
}

function solution(arr){
    let answer=[];
    for(const i of arr){
        let res = Number(i.toString().split("").reverse().join(""))
        if(isPrime(res)) answer.push(res)
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));