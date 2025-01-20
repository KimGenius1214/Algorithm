function solution(my_string) {
    var answer = [];
    let prevStr = '';
    let len = my_string.length - 1;
    for(let i = len; i >= 0; i--){
        let str = my_string[i];
        str += prevStr;
        prevStr = str;
        answer.push(str);
    }
    answer.sort()
    return answer;
}