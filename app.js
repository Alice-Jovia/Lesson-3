// const day = prompt("Enter the day of the week? ");

// if (day === "Monday") {
//   alert("Its a Monday");
// } else if (day === "Tuesday") {
//   alert("Its a Tuesday");
// } else if (day === "Wednesday") {
//   alert("Its a Wednesday");
// } else if (day === "Thursday") {
//   alert("Its a Thursday");
// } else if (day === "Friday") {
//   alert("Its a Friday");
// } else if (day === "Saturday") {
//   alert("Its a Saturday");
// } else {
//   alert("Its a Sunday");
// }

// SWITCH STATEMENTS
// const day = prompt("Enter the day of the week? ");

// switch (day) {
//   case "Monday":
//     alert("Its a mONDAY");
//     break;
//   case "Tuesday":
//     alert("Its a Tuesday");
//     break;
//   default:
//     alert("Its a Sunday");
// }

//STRINGS
const firstName = "John";
const lastName = "Henry";
// Methods/Functions
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.toLocaleUpperCase());

const hours = 8;
const minutes = 5;

const paddedMinutes = minutes.toString().padStart(2, "0");
const paddedHours = hours.toString().padStart(2, "0");
// Concatenation (Joining things together)
const fullName = firstName + " " + lastName;
const fname = `The full Name is ${firstName} ${lastName}`;
// const time
const age = 2024 - 2000;
const r = 6;
const area = 3.14 * r ** 2;
const result = `The area of a circle with radius ${r} is ${area} sq.m`;
console.log(result);
// console.log(firstName.toUpperCase());
// NUMBERS
const price = 3000;
console.log(price.toFixed(2));
console.log(parseFloat(price));

// FUNCTIONS
/**
 * Calling
 * Texting
 * Image Capturing
 * recording
 */

//Two steps for creating a function
//1) Function creation
//2) Invoking/execution

function calling() {
  //Calling Logic
  alert("Calling a person");
}
//invoke it
// calling();

//PARAMETERS/ARGUMENTS
function callingPerson(phoneNumber) {
  alert(`Calling ${phoneNumber}`);
}

// const phoneNumber = prompt("Enter your phone number");
// if (phoneNumber.length < 10 || phoneNumber > 10) {
//   alert("Your Phone Number is Incorrect");
//   //   return false;
// }
// callingPerson(phoneNumber);

// USE RETURN
function calcAreaOfCircle(r) {
  const area = 3.14 * r ** 2;
  const result = `The area of Circle with radius ${r} is ${area}`;
  return result;
}
function calcAreaOfRectangle(length, width) {
  const area = length * width;
  const result = `The area of Rectangle with length ${length}  and width ${width} is ${area}`;
  return result;
}

const areaOfCircle = calcAreaOfCircle(10);
const areaOfRect = calcAreaOfRectangle(10, 2);
console.log(areaOfRect);

function chooseShape(shape) {
  if (shape === "rectangle") {
    const length = prompt("Enter length");
    const width = prompt("Enter width");
    const area = calcAreaOfRectangle(length, width);
    alert(`The area of a rectangle is ${area}`);
  }
}
const shape = prompt("Enter shape");
chooseShape(shape);
