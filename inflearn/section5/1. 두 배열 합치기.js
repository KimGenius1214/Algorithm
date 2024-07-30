// 시간 복잡도로 인해서 sort 내장함수는 알고리즘에서 최대한 사용하지 않도록.
// function solution(arr1, arr2){
//     let answer=[];
//     answer = arr1.concat(arr2).sort((a, b) => a - b);
//     return answer;
// }

function solution(arr1, arr2){
    let answer=[];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    while(p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++])
    }
    // 남은 부분 처리해서 바로 쓱 넣기
    while(p1 < n) answer.push(arr1[p1++]);
    while(p2 < n) answer.push(arr2[p2++]);

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));