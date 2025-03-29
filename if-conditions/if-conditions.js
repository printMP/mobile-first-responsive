let age = document.getElementById("age")
let codeOutput = document.getElementById("code-output")
let button = document.getElementById("button")
function ageChecker(){
    let solution = ""
    let x = age.value
    let xNum = Number(x)
    //console.log(typeof xNum)
    
    if(xNum < 12){
        solution = "You are too young!"
        console.log("You are too young!")
    }
    else if(xNum > 18){
        solution = "You are too old!"
        console.log("You are too old!")
    }
    else{
        solution = "You are the right age."
        console.log("You are the right age.")
    }

    codeOutput.innerHTML = solution
}

/*

this is a function definition
function name (params) {action the function does}
this is how we do a function call
we use the function name followed by parentheses
name()

*/