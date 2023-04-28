const s = "a234";
// const s = "1234";

function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

solution(s);
