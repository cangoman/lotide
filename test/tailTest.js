const assertEqual = require("../assertEqual");
const tail = require("../tail");

const numbers = [1, 5, 10, 20];
let numTail = tail(numbers);
assertEqual(5, numTail[0]);

numTail = tail(numTail);
assertEqual(10, numTail[0]);

numTail = tail(numTail);
assertEqual(20, numTail[0]);





