function solution(n) {
    var answer = [];
    let index = 1;
    while(index <= n / 2){
        if(n % index === 0) answer.push(index);
        index++
    }
    return [...answer, n];
}