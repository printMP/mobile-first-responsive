let codeOutput = document.getElementById("code-output");

// Assignment Operator
let x = 3;
console.log("The assignment operator is the equal sign ",x);

// Asterisk is multiplication operator
let z = x * 3;
console.log("x * 3 = ",z);

/*Plus sign is the addition operator for numbers
The plus sign can be used as a concatenator operator for strings */
let y = x + 5;
console.log("x + 5 = ",y);

let a = "1";
let b = a + y;
console.log("a + y = ",b);

// The percentage sign is modulus operator
// It returns the remainder of a number after division
console.log("Y % 3 = ", y % 3);

//The comparison operator compares 2 values
//The comparison operator can be a double or triple equal sign
//Double equal signs tests for equal values
//Triple equal signs tests for equal values and equal data type
if (b == y){
    console.log("If B = Y", b == y);
}
else {
    console.log("If B did not equal Y", b === y);
}
codeOutput.innerHTML = "Check operators in console";
