n = int(input())

# hour, mnu, sec, count = 0, 0, 0, 0

# while True:
#     if(hour == n):
#         break;
#     sec += 1

#     if(sec == 60):
#         mnu += 1
#         sec = 0
    
#     if(mnu == 60):
#         hour += 1
#         mnu = 0

#     if(str(sec).count('3') > 0):
#         count += 1
#     if(str(mnu).count('3') > 0):
#         count += 1
#     if(str(hour).count('3') > 0):
#         count += 1


count = 0

for i in range(n + 1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                count += 1
print(count)

