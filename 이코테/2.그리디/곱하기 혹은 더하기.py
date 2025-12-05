# s = (map(str, input()))

# maxNum = 1
# prev = 0
# isFirst = False
# for i in s:
#     if(isFirst == False):
#        isFirst = True
#        prev = int(i)
#     else:
#         maxNum = max(prev + int(i), prev * int(i))
#         prev = maxNum
    

# print(maxNum)

s = input()

result = int(s[0])

for i in s[1:]:
    num = int(i)
    result = max(result + num, result * num)

print(result)