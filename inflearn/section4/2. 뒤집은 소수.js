function getPrime(num){
    let prime = [false, false, ...Array(num - 1).fill(true)];

    for(let i = 2; i * i <= num; i++){
        if(prime[i]){
            for(let j = i * 2; j <= num; j += i){
                prime[j] = false;
            }
        }
    }
    return prime.filter(Boolean);
}

function isPrime(num){
    if(num === 1) return false;
    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function solution(arr){
    let answer=[];
    for(const i of arr){
        let rev = Number(i.toString().split('').reverse().join(''));
        if(isPrime(rev)) answer.push(rev);
    }
    return answer;
}

function solution(arr){
    let answer=[];
    for(let i of arr){
        let res = 0;
        //뒤집기 추출;
        while(i){
            let t = i % 10;
            res = res * 10 + t;
            i = parseInt(i / 10);
        }

    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));