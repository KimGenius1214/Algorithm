function solution(num_list, n) {
    var answer = [];
    let back = num_list.slice(0,n);
    let front = num_list.slice(n);
    answer = front.concat(back)
    return answer;
}