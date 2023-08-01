const lodash = require('lodash');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// print sum of array
let sum = lodash.sum(arr);
console.log(sum);
// shuffle array
let shuffled = lodash.shuffle(arr);
console.log(shuffled);
// split array into chunks of 2
let chunked = lodash.chunk(arr, 2);
console.log(chunked);
// sort array
let sorted = lodash.sortBy(arr);
console.log(sorted);
// filter array for even numbers
let filtered = lodash.filter(arr, (n) => n % 2 === 0);
console.log(filtered);
// find index of 5
let index = lodash.indexOf(arr, 5);
console.log(index);

const obj = {
    name: 'John',
    age: 25,
    phoneno: 1234567890,
    country: 'India',
};
// print keys of object
let keys = lodash.keys(obj);
console.log(keys);
// print values of object
let values = lodash.values(obj);
console.log(values);
// print key value pairs of object
let pairs = lodash.toPairs(obj);
console.log(pairs);

// Path: index.js
