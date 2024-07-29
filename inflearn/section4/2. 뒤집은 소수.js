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
        let rev = i.toString().split('').reverse().join('');
        let num = Number(rev);
        if(isPrime(num) && num >= 2) answer.push(num);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));