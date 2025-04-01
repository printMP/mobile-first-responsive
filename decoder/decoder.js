//User input word is declared
let input1 = document.getElementById("word");
let button = document.getElementById("button");
let output1 = document.getElementById("code-output");

console.log("The button is ", button);

console.log("Input is ", value);

function encoder1(){
    let value = input1.value;
    console.log("Input is: ", value);

    let len = value.length;
    console.log("The length of the word is ", len); "letters long.";

    let encodedValue = "";
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for(let i = 0; i < len; i++) {
        console.log("The word is ", value[i]);

        //encryption algorithm
        //convert letters to numbers
        let result = alphabet.indexOf(value[i]);
        encodedValue += i;


    }
    output1.innerHTML = encodedValue;
}
