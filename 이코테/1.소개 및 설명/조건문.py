# 프로그램의 흐름제어
x = 15

if x >= 10:
    print(" x >= 10")
elif x < 10 and x >= 5:
    print("x >= 5")
elif x >= 3:
    print("x >=3")
else:
    print("no")

# 코드의 블록을 들여쓰기로 지정 4개 공백 문자를 사용으로 표준
# == , != > < >= <= 연산자 이용 가능
# and, or, not 사용

if True or False:
    print("YES")


# in, not in 사용 가능 리스트, 튜플 ,문자열, 딕셔너리 모두에서 사용 가능
# 아무것도 처리하고 싶지 않을 떄 pass(디버깅 시 사용)

#조건부 표현식
result = 'sucess' if x >= 15 else 'fail'
print(result)