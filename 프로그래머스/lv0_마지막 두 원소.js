function solution(num_list) {
  let len = num_list.length;
  let num =
    num_list[len - 1] <= num_list[len - 2]
      ? num_list[len - 1] * 2
      : num_list[len - 1] - num_list[len - 2];
  num_list.push(num);
  return num_list;
}
