# 특정 작업을 하나의 단위로 묶음
# 내장함수: 파이썬이 기본 제공
# 사용자 정의 함수: 개발자가 직접 정의하여 사용

def add(a, b):
    return a + b

print(add(3, 7))

a = 0

def func():
    global a
    a += 1

for i in range(10):
    func()

print(a)


def operator(a, b):
    add = a + b
    sub = a - b
    mul = a * b
    div = a / b
    return add , sub, mul, div

a, b, c, d = operator(7 , 3)

print(a, b, c, d)

print((lambda a, b: a + b)(3,7))

list1 = [1,2,3]
list2 = [4,5,6]

result = map(lambda a, b: a + b, list1, list2)

print(list(result))