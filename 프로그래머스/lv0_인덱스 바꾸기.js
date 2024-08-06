function solution(my_string, num1, num2) {
    var answer = my_string.split("");
    let left = my_string[num1];
    let right = my_string[num2];
    answer[num1] = right;
    answer[num2] = left;
    return answer.join("");
}