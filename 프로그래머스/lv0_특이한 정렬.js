function solution(numlist, n) {
    var answer = numlist;
        answer.sort((a, b) => {
         const newA = Math.abs(n - a) 
         const newB = Math.abs(n - b)
         if(newA === newB){
             return b - a 
         }else {
             return newA - newB
         }
        })
    return answer;
}