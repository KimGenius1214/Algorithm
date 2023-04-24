// 1924 2007년
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const x = input[0];
const y = input[1];

const date = new Date(`2007-${x}-${y}`);
switch (date.getDay()) {
  case 0:
    console.log("SUN");
    break;
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THU");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
}
