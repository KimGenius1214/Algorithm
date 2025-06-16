function solution(num_list, n) {
    var answer = [];
    const sub = num_list.length / n;
    for(let i = 0; i < sub; i++){
        answer.push(num_list.slice(i * n, i * n + n));
    }
    return answer;
}