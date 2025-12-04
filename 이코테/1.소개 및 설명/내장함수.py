result = sum([1,2,3,4,5])

min_result = min(7,3,4,2)
max_Result = max(3,4,5,7)

evResult = eval("(3+5)*7") 
print(result)
arr = [1,2,3,4,5]

result2 =  sorted(arr)
result3 =  sorted(arr, reverse=True)

#순열: 서로 다른 n개에서 서로 다른 r개를 선택하여 일렬로 나열 n P r
from itertools import permutations
data = ['A', 'B', 'C']
result = list(permutations(data, 3))

#조합: 서로 다른 n개에서 순서 상관없이 서로 다른 r개를 선택 n C r
from itertools import combinations
result = list(combinations(data, 2))

#중복 순열
from itertools import product
result = list(product(data, repeat=2)) # 2개를 뽑는 모든 순열 구하기(중복 허용)

#중복 조합
from itertools import combinations_with_replacement
result = list(combinations_with_replacement(data, 2)) # 2개를 뽑는 모든 조합 구하기 (중복 허용)

# counter
from collections import Counter
counter = Counter('red', 'blue', 'green', 'red')
print(counter['blue'])
print(dict(counter))

# 최대 공약수 gcd
# 최대 공배수 (LCM)
import math

def lcm(a, b):
    return a * b // math.gcd(a, b)

print(math.gcd(21, 14)) #최대 공약수
print(lcm(21,14)) #최소 공배수수

