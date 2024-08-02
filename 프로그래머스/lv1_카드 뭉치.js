function solution(cards1, cards2, goal) {
    var answer = '';
    let n = goal.length;
    let p1 = 0;
    let p2 = 0;
    
    for(const i of goal){
         if(cards1[p1] === i) {
            p1++;
            answer = "Yes"
        }else if (cards2[p2] === i){
            p2++;
            answer = "Yes"
        }else {
            answer  = "No";
            break;
        }
    }
    return answer;
}