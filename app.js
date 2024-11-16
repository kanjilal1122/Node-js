require('./xyz')

//const {checkSum , calculateSum} = require('./sum.js')
//import { checkSum, calculateSum } from "./sum.js";
const { calculateSum , multiply } = require('./calculate')
const  data = require("./data.json")
 
var name = "Namaste Javascript ";

let a = 20;


let b = 30;

calculateSum(a, b);
let sum = a + b;

console.log(sum);
console.log(name);
console.log(data);

// console.log(global);
// console.log(globalThis === global)
//console.log("checksum", checkSum);
