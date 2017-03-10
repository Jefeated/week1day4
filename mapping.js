var input = [
  { x: 3, y: 4 }, //25
  { x: 12, y: 5 }, //169
  { x: 8, y: 15 }  //289
];
var result = input.map(function(num){

  return result = Math.sqrt((num.x)*(num.x) + (num.y)*(num.y));
});

console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

