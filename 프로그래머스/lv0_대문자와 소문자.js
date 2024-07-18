
function isAllLowerCase(str) {
    return /^[a-z]+$/.test(str);
}

function solution(my_string) {
    var answer = '';
    for(const i of my_string){
        if(isAllLowerCase(i)){
            answer += i.toLocaleUpperCase()
        }else {
            answer += i.toLocaleLowerCase()
        }
    }
    return answer;
}