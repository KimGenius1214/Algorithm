#리스트 자료형
#데이터를 연속적으로 담아 처리하기 위해 사용(c, Java -배열, array list와 유사)
a = [1,2,3,4]

print(a[3])

n = 10

a= [0] * n
print(a)
# 뒤에서 첫번째 원소 출력
a[-1]

# 값 변경 가능
a[3] = 7

#: 콜론을 넣어서 시작 인덱스와 끝 인덱스 설정하여 슬라이싱 이용 가능
print(a[1: 4])

# 리스트 컴프리헨션
array = [i for i in range(10)]
array = [i for i in range(10) if i % 2 == 1]

# n x m크기의 2차원 리스트 초기화 할 때 유용
array = [[0] * m for _ in range(n)]

a.append(2)

a.sort()

a.reverse()

a.insert(2, 3)

a.count(3)

a.remove(1);

a = [1,2,3,4,5,5,5];
remove_set = {3, 5}


result = [i for i in a if i not in remove_set]
print(result)