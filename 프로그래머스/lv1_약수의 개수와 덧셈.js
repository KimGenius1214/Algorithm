function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let index = 1;
    let result = [];
    while (index <= i) {
      if (i % index === 0) result.push(index);
      index++;
    }
    if (result.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

function test(num) {
  let index = 1;
  let result = [];

  //case 1
  while (index <= num) {
    if (num % index === 0) result.push(index);
    index++;
  }

  console.log(result);

  //case 2
  while (index <= num / 2) {
    if (num % index === 0) result.push(index);
    index++;
  }

  console.log([...result, num]);

  //case3
  while (index <= Math.sqrt(num)) {
    if (num % index === 0) {
      result.push(index);
      if (num / index !== index) result.push(num / index);
    }

    index++;
  }
}
