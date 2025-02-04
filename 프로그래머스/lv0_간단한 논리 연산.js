function solution(x1, x2, x3, x4) {
    var answer = true;
    let response1 = x1 || x2
    let response2 = x3 || x4
    let response3 = response1 && response2
    answer = response3
    return answer;
}