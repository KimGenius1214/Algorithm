# 탐색: 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정

- 대표적인 그래프 탐색 알고리즘: DFS / BFS
- DFS/BFS는 자주 등장하므로 반드시 숙지

## 스택

- 먼저 들어 온 데이터가 나중에 나가는 선입후출의 자료구조(FILO):
- 입구와 출구가 동일한 형태

* 파이썬에서는 stack = [] 형태
  append(), pop() 메소드, [::-1] 최상단 원소 출력하는 등의 리스트 메소드 사용

## 큐

- 먼저 들어 온 데이터가 먼저 나가는 선입선출의 자료구조(FIFO)
- 큐는 입구와 출구가 모두 뚫려 있는 터널과 같은 형태로 시각화

* 파이썬에서는
  from collections import deque
  queue = deque()

append(), popleft(), reverse() 메소드 사용

## 재귀 함수

- 자기 자신을 다시 호출하는 함수

* 재귀 함수를 문제 풀이에서 사용할 때는 재귀 함수의 종료 조건을 반드시 명시해야 합니다.
* 종료 조건을 제대로 명시하지 않으면 함수가 무한히 호출될 수 있습니다.

* ex): 팩토리얼
  def factorial_recursive(n):
  if n <= 1:
  return 1
  return n \* factorial_recursive(n - 1)
