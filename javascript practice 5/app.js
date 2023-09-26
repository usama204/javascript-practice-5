// Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase

var allLower = userInput.toLowerCase();

// Convert the string represented by x to lower-case and assign
// the result to the same variable.

x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign
// the result to the same variable.

y = y.toUpperCase();

// Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

var originalVariable = "YourStringHere";  // Replace "YourStringHere" with your actual string
var lowercaseVariable = originalVariable.toLowerCase();

// 5. Convert the string represented by an array element to lower-
// case and assign it to a variable that hasn't been declared beforehand.

var myArray = ["Hello", "World"];
var elementIndex = 0; // Replace with the index of the element you want to convert

var lowercaseVariable = myArray[elementIndex].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.

var myString = "YourStringHere";  // Replace "YourStringHere" with your actual string
var uppercaseString = myString.toUpperCase();

// Display the uppercase string in an alert
alert(uppercaseString);


// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation
// is the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName);

// 1. "captain" has been assigned to variable “sameWords”. You
// want to slice "ap" out of it.

var sameWords = "captain";
var slicedString = sameWords.slice(0, 1) + sameWords.slice(3);

console.log(slicedString);

// 2. The number of characters in the string will be assigned to the
// variable.

var myString = "Hello, World!";
var characterCount = myString.length;

console.log(characterCount);


// The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it
// to the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var seg = animal.slice(1, 5);

console.log(seg);


// Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

var myString = "Hello, World!";
var characterCount = myString.length;

console.log(characterCount);

// In a first statement measure how many characters there are in
// a string represented by a variable. In a second statement slice

var myString = "This is a sample string";

// First statement: Measure the number of characters
var characterCount = myString.length;

// Second statement: Slice a portion of the string
var slicedPortion = myString.slice(5, 11);

console.log("Character Count:", characterCount);
console.log("Sliced Portion:", slicedPortion);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.indexOf("be");

// Find the index of the first character of the last instance of "go"
// in the string represented by the variable text and assign the
// number to the variable indx, which hasn't been declared
// beforehand.

var text = "Let's go to the park and then go shopping. We love to go!";
var lastIndexOfGo = text.lastIndexOf("go");
var indx = lastIndexOfGo;

console.log(indx);

// Code the first line of an if statement that tests whether a
// segment with an index represented by indexNum exists in a
// string.

if (typeof yourString[indexNum] !== "undefined") {
    // Your code here
  }

//   In this string "abcde", what character is at index 2? (Use
//     charAt)

  var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2); // This will print "c"


// How do you convert a string to an integer in JavaScript?

var str = "42";
var num = parseInt(str);
console.log(num); // Output: 42

// Write a JavaScript function to convert the string "123" to an
// integer.

function stringToInt(str) {
    return parseInt(str);
  }
  
  var inputString = "123";
  var result = stringToInt(inputString);
  
  console.log(result); // Output: 123
  
//   How can you convert a string containing a decimal number to a
//   floating-point number in JavaScript?

var str = "3.14159"; // Example string containing a decimal number
var floatingPointNumber = parseFloat(str);

console.log(floatingPointNumber); // Output: 3.14159

// How can you check if a string can be successfully converted to
// an integer or decimal in JavaScript before performing the
// conversion?

function isConvertibleToNumber(str) {
    // Use the unary plus (+) operator to attempt conversion
    // to both integer and floating-point numbers.
    var asInt = parseInt(str);
    var asFloat = parseFloat(str);
  
    if (!isNaN(asInt) || !isNaN(asFloat)) {
      // The string can be successfully converted to either an integer or a float.
      return true;
    } else {
      // The string cannot be converted to a number.
      return false;
    }
  }
  
  var string1 = "123";
  var string2 = "3.14";
  var string3 = "abc";
  
  console.log(isConvertibleToNumber(string1)); // Output: true
  console.log(isConvertibleToNumber(string2)); // Output: true
  console.log(isConvertibleToNumber(string3)); // Output: false

//   How can you convert a number to a string in JavaScript?
  
  var num = 42; // Example number
var str = num + "";

console.log(str); // Output: "42" (as a string)


// Write a JavaScript function to convert the number 42 to a
// string.

function numberToString() {
    var num = 42;
    var str = num.toString();
    return str;
  }
  
  var result = numberToString();
  console.log(result); // Output: "42"

  
//   Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?

var decimalString = "3.14";
var integerNumber = parseInt(decimalString);

console.log(integerNumber); // Output: 3


// Code a statement that rounds a number represented by num to
// 4 places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

var num = 12.3456789;
var newNum = num.toFixed(4).toString();

// In a single statement round a number represented by a variable
// to 2 places, convert it to a string, convert it back to a number,
// and assign it to the same variable.

var myNumber = 12.3456;
myNumber = parseFloat(myNumber.toFixed(2));

// Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

if (num.toFixed(2).toString().length > 4) {
    // Your code here
  }

  
//   Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

var originalNumber = 123.456789; // Replace with your number
var roundedNumber = originalNumber.toFixed(2);
var roundedString = roundedNumber.toString();

alert(roundedString);
