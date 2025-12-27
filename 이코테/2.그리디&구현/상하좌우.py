n = int(input())
datas = list(map(str, input()))

coor = [1,1]
# isFirst = True

# for i in datas:
#     if(coor[0] + 1 > n or coor[1] + 1 > n): continue
#     if(i == 'L'):
#         right = coor[1] - 1
#         if(right == 0): continue
#         coor = [coor[0] , right]
#     elif(i == 'R'):
#         coor = [coor[0], (coor[1] + 1)]
#     elif(i == 'U'):
#         left = (coor[0] - 1)
#         if(left == 0): continue
#         coor = [left, coor[1]]
#     elif(i == 'D'):
#         coor = [(coor[0] + 1), coor[1]]
#     isFirst = False

# for i in datas:
#     left = coor[0]
#     right = coor[1]
#     if(i == 'L' and right > 1):
#         coor[1] -= 1
#     elif(i == 'R' and right < n):
#         coor[1] += 1
#     elif(i == 'U' and left > 1):
#         coor[0] -= 1
#     elif(i == 'D' and left < n):
#         coor[0] += 1
# print(coor)

x , y = 1, 1
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_type = ['L', 'R', 'U', 'D']

for data in datas:
    nx, ny = 0, 0
    for i in range(len(move_type)):
        if(data == move_type[i]):
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    x, y = nx, ny 

print(x, y)