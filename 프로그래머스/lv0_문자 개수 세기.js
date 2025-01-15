function solution(my_string) {
    var answer = [];
    let arr =Array(52).fill(0);
    for(let i = 0; i < my_string.length; i++){
        answer.push(my_string.charCodeAt(i) > 90 ? my_string.charCodeAt(i) - 71 : my_string.charCodeAt(i) - 65);
    }
    for(const i of answer){
        arr[i] +=  1;
    }
    return arr;
}