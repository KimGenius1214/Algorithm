const nums = [3, 1, 2, 3];
function solution(nums) {
  var answer = 0;
  const numsSet = new Set(nums);
  const len = numsSet.size;
  if (nums.length / 2 > len) {
    answer = len;
  } else {
    answer = nums.length / 2;
  }
  console.log(answer);
  return answer;
}
solution(nums);
