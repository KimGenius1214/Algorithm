n = int(input())

hour, mnu, sec, count = 0, 0, 0, 0

while True:
    if(hour > n):
        break;

    if(sec == 60):
        mnu += 1
        sec = 0
    
    if(mnu == 60):
        hour += 1
        mnu = 0

    if '3' in str(hour) + str(mnu) + str(sec):
        count += 1

    sec += 1

# for i in range(n + 1):
#     for j in range(60):
#         for k in range(60):
#             if '3' in str(i) + str(j) + str(k):
#                 count += 1
print(count)

