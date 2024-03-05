function solution(num_list, n) {
  var answer = 0;
  let arr = [];
  arr = num_list.filter((r) => r === n);
  return arr.length > 0 ? 1 : 0;
}
