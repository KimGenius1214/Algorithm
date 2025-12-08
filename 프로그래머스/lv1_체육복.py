def solution(n, lost, reserve):
    interSec = list(set(lost).intersection(reserve))
    lost = [i for i in lost if i not in interSec]
    reserve = [i for i in reserve if i not in interSec]
    count = 0    
    
    lost.sort()
    reserve.sort()
    
    for i in lost:
        front = i - 1
        back = i + 1
        
        if(front in reserve):
            count += 1
            reserve.remove(front)
        elif(back in reserve):
            count +=1
            reserve.remove(back)
    answer = n - len(lost) + count
    return answer


def solution(n, lost, reserve):
    interSec = list(set(lost).intersection(reserve))
    lost = [i for i in lost if i not in interSec]
    reserve = [i for i in reserve if i not in interSec]
    count = 0
    lost.sort()
    reserve.sort()

    for i in lost:
        front = i - 1
        back = i + 1
        if(front in reserve):
            count += 1
            reserve.remove(front)
        elif(back in reserve):
            count += 1
            reserve.remove(back)
    answer = n - len(lost) + count
    return answer