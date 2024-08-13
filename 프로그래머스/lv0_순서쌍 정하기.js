function solution(emergency) {
    var answer = [];
    let arr = emergency.slice().sort((a, b) => b - a);
    answer = emergency.map((i) => arr.indexOf(i) + 1)
    return answer;
}