function solution(arr, queries) {
    var answer = [];
    let temp = arr;
    answer = arr;
    for(const i of queries){
        let prev = arr[i[0]];
        let next = arr[i[1]];
        answer[i[0]] = next
        answer[i[1]] = prev
    }
    return answer;
}