const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const A = input.shift();

const obj = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};

for (const i of input) {
  console.log(obj[i]);
}
