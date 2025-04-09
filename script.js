// referencing the ID named code-output in HTML
let output = document.getElementById("code-output");

// Printing the value of the output
console.log("ouput =", output);

// Declaration and initialization of the variable x with the value Morrison
let x = "Morrison";

// Declaration and initialization of the variable y with the value 3
let y = 3;

// Declaration and initialization of the variable z with the boolean value TRUE
let z = true;

x = "john";

// Permanently setting the variable name to the value Jack
const name = "Jack";

// Unable to change name variable (as a test)
// name = "Jason";

// declaration of age
let age;

// initialization of age
age = 33;

output.innerHTML = z;

// Clickable menu that lists items
const menu_items = document.getElementById("menu_items");
let menu = (elem) => {
    console.log("THIS is ", elem.nextElementSibling.style.display);
    if(elem.nextElementSibling.style.display == " "){
         menu_items.style.display = "flex";
    }
    else{
        menu_items.style.display = " ";
    }
}

