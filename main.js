

// Use the `numbers` array for questions 3 - 8.
var numbers = [18,12,4,1,9,7,11,3,101,5,6];



console.log(minNumbers);
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

function smallestNumber(numArry){
let smallestNumber = numArry[0];
for (let i = 1; i < numArry.length; i++){
  if (numArry[i] < smallestNumber) {
    smallestNumber = numArry[i];
  }
}
    return smallestNumber;
}
