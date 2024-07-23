function solution(arr){
    let answer=[];
    for(const i of arr){
        if(i % 2 !== 0){
            answer.push(i)
        }
    }  
    return (
        console.log(answer.reduce((a, b) => a + b,0)),
        console.log(Math.min(...answer))
    );
}

arr=[12, 77, 38, 41, 53, 92, 85];
solution(arr)