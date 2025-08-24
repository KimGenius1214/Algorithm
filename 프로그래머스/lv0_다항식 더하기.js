function solution(polynomial) {
    var answer = '';
    let num = 0;
    let xnum = 0;
    let arr = polynomial.split(" + ")
    for(const i of arr){
        if(i.includes('x')){
            xnum += Number(i.replace("x", "") || 1)
        }else {
            num += Number(i)            
        }
    }
    if(xnum > 0 && num === 0){
        if(xnum === 1){
        answer =  `x`
}else {
        answer =  `${xnum}x`
}
    }else if (xnum === 0 && num > 0){
        answer =  `${num}`
    }else {
        if(xnum === 1){
            answer = `x + ${num}`
        }else {
           answer = `${xnum}x + ${num}`
        }
    }
    return answer;
}