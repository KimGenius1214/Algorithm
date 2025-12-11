n = int(input())
data = list(map(str, input()))

coor = [1,1]
isFirst = True

for i in data:
    if(coor[0] + 1 > n or coor[1] + 1 > n): continue
    if(i == 'L'):
        right = coor[1] - 1
        if(right == 0): continue
        coor = [coor[0] , right]
    elif(i == 'R'):
        coor = [coor[0], (coor[1] + 1)]
    elif(i == 'U'):
        left = (coor[0] - 1)
        if(left == 0): continue
        coor = [left, coor[1]]
    elif(i == 'D'):
        coor = [(coor[0] + 1), coor[1]]
    isFirst = False

print(coor)