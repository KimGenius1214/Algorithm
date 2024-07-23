function solution(arr){         
    // let answer = 0;
    // let min = arr[0]
    // for(const i of arr){
    //     if(min > i){
    //         min = i
    //     }
    // }
    // answer = min
    answer = Math.min(...arr)
    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));