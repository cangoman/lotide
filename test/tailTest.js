const assertEqual = require("../assertEqual");
const tail = require("../tail");

const numbers = [1, 5, 10, 20];
let num_tail = tail(numbers);
assertEqual(5, num_tail[0]);

num_tail = tail(num_tail);
assertEqual(10, num_tail[0]);

num_tail = tail(num_tail);
assertEqual(20, num_tail[0]);





