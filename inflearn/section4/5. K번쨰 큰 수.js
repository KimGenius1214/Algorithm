function solution(n, k, card){
    let answer;
    let set = new Set();
    // n - 2 까지 돌아도 됨
    for(let i = 0; i < n; i++){
        // n - 1 까지 돌아도 됨
        for(let j = i + 1; j < n; j++){
            for(let s = j + 1; s < n; s++){
                set.add(card[i] + card[j] + card[s]);
            }
        }
    }    
    let newArr = Array.from(set).sort((a, b)=> b - a);
    answer = newArr[k - 1]
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));