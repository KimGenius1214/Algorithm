function solution(myString, pat) {
    var answer = 0;
    let reversedStr = '';
    for(const i of myString){
        reversedStr += i === 'A' ? 'B' : 'A';
    }
    if(reversedStr.includes(pat)){
        answer = 1;
    }
    return answer;
}