let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("submit");
let output = document.getElementById("code-output");


//Function definition
function addNumbers(x , y){
    
    let xNum = Number(x);
    let yNum = Number(y);
    let solution = xNum + yNum;
    output.innerHTML = solution
    return solution;
}
// function call
//let x = addNumbers(num1, num2);
//console.log("addNumbers returns the value of x", x);
button.addEventListener("click", function(){
    let num1 = input1.value;
    let num2 = input2.value;
    addNumbers(num1, num2);
})
