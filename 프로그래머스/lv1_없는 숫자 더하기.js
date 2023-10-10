function solution(numbers) {
  var answer = -1;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result = arr.filter((x) => !numbers.includes(x));
  console.log(result);
  answer = result.reduce(function add(sum, currValue) {
    return sum + currValue;
  });
  return answer;
}
