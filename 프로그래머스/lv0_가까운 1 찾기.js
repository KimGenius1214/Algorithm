function solution(arr, idx) {
    var answer = 0;
    let str = '';
    for(const i of arr){
        str += i
    }
    const split = str.substring(idx);
    const index = split.indexOf('1');
    answer = index === -1 ? -1 : index + idx;
    return answer;
}