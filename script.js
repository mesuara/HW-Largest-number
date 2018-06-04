var one = prompt("Enter your first number?");
var two = prompt("Enter your second number?");
var three = prompt("Enter your last number?");

var largest = '';
if( one > two && one > three){
  largest = one;
}else if(two > one && two > three){
  largest = two;
}else {
  largest = three;
}
console.log(largest + ' is the largest number');