function solution(food) {
    var answer = '';
    let num = 1;
    let arr = '';
    food.shift();
    for(const i of food){
        if(i >= 2){
            let len = Math.floor(i / 2);
            for(let j = 0; j < len; j++){
                arr += String(num)
            }
        }
        num++;
            
    }
    answer = arr.concat('0').concat(arr.split("").reverse().join(""));
    return answer;
}