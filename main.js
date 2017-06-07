// 1.
// Without logging the values, list the value of `sports`
var sports = ['soccer', 'baseball'];
sports.push('football', 'swimming');
// A:
// sports = <your answer>



// 2.
// Using the `strings` array, write a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString (stringArr) {
  let longest = ""; // this will store the current longest string
  let test = "";    // this will store the string we will compare to the current longest
  for (let i = 0; i < stringArr.length; i++) {  // we need to check all the strings in the array
    test = stringArr[i];  // set our test string to the next string in the array
    if (test.length > longest.length) {  // if the test string is longer than the current longest...
      longest = test;  // make the current longest equal to the test string
    }
  }
  return longest; // when we're done checking, return the longest string
}


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});



// Use the `numbers` array for questions 3 - 8.
var numbers = [18,12,4,1,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:


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


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});



// 4.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
// On this, the array.reverse is all I had to do. The array prefix just specifies which array I want to use. When I tested it I used console.log.
var array = [6,5,101,3,11,7,9,18,4,12,1];
function arrayReverser(array) {
array.reverse();
return array;
}
console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 5.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

function sumArrayOfNumbers(array) {
  // Used the term 'array' inside the parameter of the function so it will be universal to any array;

  let sum = 0;
  // created 'let sum = 0' in order to give us a place to log our data from the 'for loop';

  for (let i = 0; i < array.length; i++) {
    // 1st Part: 'i' is set to 0; 2nd Part: this should come back as either true or false and is the main condition of our for loop;
    //  3rd Part: Each time the for loop is ran, the increment "i" will be increased by one each time.

    sum += array[i]; // similar to writing like sum = sum + array[i]
    // With 'i' being set to 0, the array will start at the very first item in it's index.
    // Then, each time the loop is ran, 'i' (array index in this case) will increase by one.
    // The += operator will add the value of "array[i]" to the value of "sum", and the result will then be stored in "sum".

  };
  return sum;
}


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 6.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 7.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:



console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 8.
// Write a function `joinArrays()` that takes two arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(array1, array2) {
  for (index in array2) {        // for every item in array2...
    array1.push(array2[index]);  // push the thing in array2[index] into array1
  }
  return array1;  // return the new array1
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlle = <your answer>

var instructorOne = instructors[4][0];
// instructorOne = <your answer>

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>

var instructorThree = instructors[2][0];
// instructorThree = <your answer>

