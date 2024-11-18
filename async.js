const fs = require("fs");
const http = require("https");
console.log("hello world!");

var a = 12865;
var b = 24789345;

http.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully");
});

setTimeout(() => {
  console.log("Settimeout call after 5 seconds timeout");
}, 2000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data", data);
});
function multifyFn(x, y) {
  const result = x * y;
  return result;
}

let c = multifyFn(a, b);
console.log("Multifying result: ", c);
