const nums = [3, 3, 3, 2, 2, 2];
function solution(nums) {
  var answer = 0;
  const numsSet = new Set(nums);
  const len = numsSet.size;
  if (nums.length / 2 > len) {
    answer = nums.length / 2 - 1;
  } else {
    answer = len;
  }
  console.log(len);
  return answer;
}
solution(nums);
