function solution(arr, flag) {
    var answer = [];
    function isTrue(num, arr) {
        for(let i =0; i < num * 2; i++){
            arr.push(num);
        }
    return arr;
    }
    
    
function isFalse(num, arr){
    return arr.splice(-1 * num);
}
    
    for(let i =0; i < arr.length; i++){
        if(flag[i]){
            isTrue(arr[i], answer)
        }else {
            isFalse(arr[i], answer)
        }
    }
    
    return answer;
}