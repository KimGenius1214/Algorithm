function solution(day, arr){
    let answer=0;
    for(const i of arr){
        const err = i % 10;
        if(err === day){
            answer++;
        }
    }
    return answer;
}

arr=[12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));