function solution(bin1, bin2) {
    var answer = '';
    answer = (Number(parseInt(bin1,2).toString(10)) + 
                Number(parseInt(bin2,2).toString(10))).toString(2)
    return answer;
}