function solution(dots) {
    var answer = 0;
    let ver = [];
    let hor = [];
    for(const i of dots){
        ver.push(i[0]);
        hor.push(i[1]);
    }
    let MaxVer = Math.max(...ver);
    let MinVer = Math.min(...ver);
    let MaxHor = Math.max(...hor);
    let MinHor = Math.min(...hor);
    
    answer = (MaxVer - MinVer) * (MaxHor - MinHor);
    
    return answer;
}