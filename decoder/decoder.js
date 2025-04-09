//User input word is declared
let input1 = document.getElementById("word");
let button = document.getElementById("button");
let output1 = document.getElementById("code-output");

console.log("The button is ", button);

console.log("Input is ", value);
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function encoder1(){
    let value_ = input1.value;
    let value = value_.toUpperCase();
    console.log("Input is: ", value);

    let len = value.length;
    console.log("The length of the word is ", len); "letters long.";

    let encodedValue = "";
    

    for(let i = 0; i < len; i++) {
        console.log("The word is ", value[i]);

        //encryption algorithm
        //convert letters to numbers
        let result = alphabet.indexOf(value[i]);
        encodedValue += result +",";


    }
    output1.innerHTML = encodedValue;
}

let input2 = document.getElementById("word2");
let button2 = document.getElementById("button2");
let output2 = document.getElementById("code-output2");

function decoder1(){
    let value = input2.value;
    console.log("Input is: ", input2.value);

    let len = value.length;
    console.log("The variable length of the word is ", len); ".";
    let trimValue = value.trim();
    console.log("The trimValue is ", trimValue);
    let splitValue = trimValue.split(",");
    console.log("The split value is ", splitValue);
    splitValue.pop();
    console.log("The pop value is ", splitValue);
    let len2 = splitValue.length;
    console.log("The len2 is ", len2);
    let result = "";

   for (let i = 0; i < len2; i++){
   //     console.log ("The index is ");
  //      console.log("When the value is ", splitValue);
  //      if(valu[i] == ","){
            console.log("Here", splitValue[i]);
  //      }
  // The algorithm for decoding goes here
        let codeValue = alphabet[Number(splitValue[i])];
        console.log("The codevalue is ", codeValue);
        if(splitValue[i] === "-1"){
            result += " ";
        }
        else{
            result += codeValue;
        }
       
    }
    console.log("The final result is ", result);
    output2.innerHTML = result.toLowerCase();
}
