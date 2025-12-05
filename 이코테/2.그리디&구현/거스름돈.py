n = 1260
count = 0

array = [500, 100, 50, 10]

for coin in array:
    count += n // coin
    n %= coin

print(count)
# 시간 복잡도 O(n) 동전의 총 종류에만 영향