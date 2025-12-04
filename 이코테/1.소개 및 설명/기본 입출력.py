# input() 한줄의 문자열을 입력
# map() 리스트의 모든 원소에 각각 특정한 함수 적용
list(map(int, input().split()))

a , b, c = map(int, input().split())

# 입력을 최대한 빠르게 받는 경우
import sys

data = sys.stdin.readline().rstrip()

# 출력 
answer =1
print(answer)
print(2, end = " ")# 줄바꿈 허용하지 않을 경우
# f 활용 가능
print(f"정답은 {answer}입니다.")
