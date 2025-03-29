//Referencing HTML elements
let word = document.getElementById("word")
let codeOutput = document.getElementById("code-output")
let button = document.getElementById("button")

//Function definition
function vowelRemover(value){
    let solution = ""
    console.log("value", value)
    let len = value.length
    console.log("The length of the number is ",len)
    for(let i = 0; i < len; i++){
        console.log(value [i])
        if (value[i] == "a" || value[i] == "e" || value[i] == "i" || value[i] == "o" || value[i] == "u" ){

        }
        
        else{
                solution += value[i]
        }
   }
}
codeOutput.innerHTML = solution

//add event listener to the button
button.addEventListener("click", function(){
    let wordValue = word.value
    vowelRemover(wordValue)
})
