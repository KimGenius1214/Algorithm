function solution(n, slicer, num_list) {
    var answer = [];
    if(n === 1){
            answer = num_list.slice(0, slicer[1] + 1);
    }else if (n === 2){
                answer = num_list.slice(slicer[0]);
    }else if (n === 3){
                answer = num_list.slice(slicer[0], slicer[1] + 1);
    }else if (n === 4){
                answer = num_list.slice(slicer[0], slicer[1] + 1).filter((r, i) => i % slicer[2] === 0);
    }
    return answer;
}

function solution(n, slicer, num_list) {
    let [a ,b, c] = slicer;
    var answer = [];
    switch(n) {
        case 1:
            answer = num_list.slice(0, b + 1);
            break;
        case 2:
                answer = num_list.slice(a);
            break;
        case 3:
                            answer = num_list.slice(a, b + 1);
            break;
        case 4:
                answer = num_list.slice(a, b + 1).filter((r, i) => i % c === 0);
    }
    return answer;
}