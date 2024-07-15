function solution(myString) {
    var answer = '';
    for(const i of myString){
        if(i.charCodeAt() < 'l'.charCodeAt()){
            answer += 'l'
        }else {
            answer += i
        }
    }
    return answer;
}