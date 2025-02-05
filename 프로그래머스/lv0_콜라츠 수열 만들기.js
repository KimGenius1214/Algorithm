function solution(n) {
    var answer = [n];
    let num = n;
    while(num !== 1){
        if(num % 2 === 0){
            const sub = num / 2;
            answer.push(sub);
            num = sub;
        }else {
            const mul = 3 * num + 1;
            answer.push(mul);
            num = mul;
        }
    }
    return answer;
}