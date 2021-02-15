// https://www.youtube.com/watch?v=PkZNo7MFNFg time stopped 43.51

//comments in JavaScript
var number = 5; // inline comment 

/* this is #
a 
multi-line 
comment*/

/* Data Types 7 different types:
undefined(variable not set anything), 
null, 
boolean(True of False), 
string ("text"), 
symbol(immutable value that is unique), 
number(integer, float), 
and object(can store key value pairs)*/

//Three ways to declare a variable in JS//
var myName = "Micheal" //used throughout the whole programme

let myPet = "cat" //only used in the scope of where you declared that

const pi = 3.14 // should never change if you try to change - you will get an error

//2 ways of making a variable
var a;//declare variable 

var b = 2; //assign a variable

console.log(b); // allows me to see things in the console

var a = 9; //initialise a variable and assign a value (with = )

// these variables below are initialised but have no value
var d;
var e;
var f;

var d = 5;
var e = 10;
var f = "I am a string!";

//case sensitity in JS
// Declarations
var StUdyLyCapVar;
var properCamelCase;
var TitleCaseOver;

//Assignments
STUDYLYCAPVAR = 10;
PRoperCAmelCAse = "A String"
tITLEScASEoVER = 9000;

//generally accepted to code in camelCase in JS

//Adding numbers
var sum = 10 + 10;
console.log(sum)

//subtracting numbers
var sum1 = 20 - 10;
console.log(sum1)

//multiplying numbers
var product = 8 * 10;
console.log(product)

//dividing numbers
var quotient = 66 / 0;
console.log(quotient)

//incrementing numbers
var myVar = 87;
//only change code below this line
myVar = myVar + 1;
myVar++; //this increments myVar by one shorthand

//decrementing numbers
var yourVar = 100 - 1;
yourVar--;

//Decimal numbers floating point numbers or floats
var ourDecimal = 5.7;
var myDecimal = 0.007;

//mutiply decimal numbers
var products = 2.0 * 2.5;
console.log(products);

//divide demical numbers
var g = 10.0 / 2.0; 
console.log(g);

//finding a remainder - this can help finding out if number is even the modulus result will be 0
var remainder;
remainder = 11 % 3;
console.log(remainder)

//compound assignment to augmented addition
var a = 3;
vra b = 17;
var c = 12;

a = a + 2;
a += 2; // shorthand
b = 9+ b;
b += 9; // shorthand
c = c + 7;
c += 7; // shorthand

//compound assignment to augmented subraction
var a = 7;
var b = 9;
var c = 3;

a = a - 6;
a -= 6; // shorthand 
b = b -15;
b -= 15; // shorthand
c = c- 1;
c -= 1; // shorthand

//compound assignment to augmented multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
a *= 5 // shorthand
b = 3 * b;
b *= 3; // shorthand
c = c * 10;
c *= 10; // shorthand

//compound assignment to augmented division

var a = 48;
var b = 108;
var c = 33;

a = a /12;
a /= 12;
b = b / 4;
b /= 4;
c = c / 11;
c /= 11;

// declare string variables
var firstName = "Alan"; //sting literals
var lastName = "Turing";

//escaping literal quotes in strings using \ escape character
var myStr = "I am a \"double quoted\" string inside \"double Quotes\"";
console.log(myStr)

//single quoting strings with a double strings
var myStr1 = '<a href="http://www.example.com\"target=\"_blank\">link</a>';
var myStr2 = `<a href="http://www.example2.com\"target=\"_blank\">link</a`; // backticks also work too!
console.log(myStr)

//escape sequences in strings
/*****
 Code Output
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab 
\b  backspace
\f  form feed
*****/

var myString = "FirstLine\n\t\\SEcondLine\nThirdLine"


//concatonating strings with plus operator

var ourString = "I come first. " + "I come second."
console.log(ourString)

//concatonating strings with += operator
var ourString2 = "I come first. ";
ourString2 += "I come second.";
console.log(ourString2)

//Constructing strings with variables
var ourName = "freecodecamp"
var greeting = "Hello, our name is " + ourName + ", how are you?";
console.log(greeting)

// appending variables to strings
var anAdjective = "awesome";
var myString = "freecodecamp is ";
myString += anAdjective;
console.log(myString)

// finding the length of a string
var firsNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// bracket notation to find first character in string
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

//string immutability - they cannot be changed ie the individuals characters of a string literal cannot be changed
var myStr = "Jello World";
//myStr[0] = "H"; //this will run an error.
myStr = "Hello World" // this is the only way reassign the value

// Bracket notation to find the nth in a string
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";
var thirdLetterOfLAstNAme = lastName[2];

// bracket notation to find the last letter of a string using negative indexing
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length -1]; //remember length count starts at zero

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1];

// bracket notation to find nth-to-last character in string using negative indexing
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length -3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length -3];

// word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
var result = "";
result += "The " myAdjective + " " +myNoun + " " + myVerb + " to the store " + myAdverb + "!";
return result;

}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bird", "fluffy", "flew", "swiftly"));

// store multiple values with arrays
var ourArray = ["John", 23];

var myArray = ["Ginger", 21];

// nested array or multidimensional array
var ourArray = [["the universe", 42], ["everything!", 101010]];
// first element of the array is another array with it's own elements

// access array data with indexes
var ourArray = [50, 60, 70, 80];
var ourData = ourArray[0]; // equals 50

// modify array  data with indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18, 45, 99] because the 1st element has been replaced with 45







