function solution(arr) {
    var answer = [[]];
    let arrLen = arr.length;
    let itemLen = arr[0].length;
    
    if(arrLen > itemLen){
        let newArr = [];
        for(const i of arr){
            for(let j = 0; j < arrLen - itemLen; j++){
                i.push(0);
            }
            newArr.push(i)
        }
        answer = newArr;
    }else if (itemLen > arrLen){
        for(let i = 0; i < itemLen - arrLen; i++){
            arr.push(Array(itemLen).fill(0))
        }
        answer = arr;
    }else {
        answer = arr;
    }
    return answer;
}