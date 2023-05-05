// 9085 더하기
const fs = require("fs");
ip = fs.readFileSync(0).toString().split("\n");
k = 0;
t = parseInt(ip[k++]);
for (i = 0; i < t; i++) {
  sum = 0;
  n = parseInt(ip[k++]);
  v = ip[k++].split(" ").map(Number);
  for (j = 0; j < n; j++) {
    a = parseInt(v[j]);
    sum += a;
  }
  console.log(sum);
}
