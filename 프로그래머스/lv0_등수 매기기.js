function solution(score) {
    let arr = [];
    let answer = [];
    for(const i of score){
        arr.push((i[0] + i[1]) / 2)
    }
    let sortedArr = [...arr].sort((a, b) => b - a);
    
    for (let i = 0; i < sortedArr.length; i++){
        answer.push(sortedArr.indexOf(arr[i]) + 1);
    }
    
    return answer
    
}