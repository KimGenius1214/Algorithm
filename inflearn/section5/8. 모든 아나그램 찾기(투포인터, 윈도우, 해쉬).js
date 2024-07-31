function compareMaps(map1, map2){
    if(map1.size !== map2.size) return false;
    for(const [key, value] of map1){
        if(!map2.has(key) || map2.get(key) !== value) return false;
    }
    return true;
}

function solution(s, t){
    let answer = 0;
    let tmap = new Map();
    let smap = new Map();
    for(const i of t){
        if(tmap.has(i)) tmap.set(i, tmap.get(i) + 1);
        else tmap.set(i, 1);
    }
    let len = t.length - 1;
    for(let i = 0; i < len; i++){
        if(smap.has(s[i])) smap.set(s[i], smap.get(s[i]) + 1);
        else smap.set(s[i], 1);
    }
    let lt = 0;
    for(let rt = len; rt < s.length; rt++){
        if(smap.has(s[rt])) smap.set(s[rt], smap.get(s[rt])+1);
        else smap.set(s[rt], 1);
        if(compareMaps(smap, tmap)) answer++;
        smap.set(s[lt], smap.get(s[lt]) -1);
        if(smap.get(s[lt]) === 0) smap.delete(s[lt]);
        lt++;
    }
    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
