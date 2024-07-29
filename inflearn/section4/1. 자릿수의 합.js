function solution(n, arr){
    let answer;
    let max = 0;
    for(const i of arr){
        let sum = 0;
        for(const j of String(i)){
            sum += Number(j);
            if(sum > max){
                max = sum;
                sum = 0;
                answer = i;
            }else if (sum === max){
                answer = Math.max(i, max)
                sum = 0;
            }
        }
    }
    return answer;
}

function solution(n, arr){
    let answer;
    let max = 0;
    for(const i of arr){
        let sum = 0;
        let temp = i;
        while(temp){
            sum += (temp % 10);
            temp = Math.floor(temp / 10);
        }
        if(sum > max){
            max = sum;
            answer = i;
        }else if(sum === max){
            if(i > answer) answer = i;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 138, 99];
console.log(solution(7, arr));