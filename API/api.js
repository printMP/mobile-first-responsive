const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
console.log("Here", myHeaders);



const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};
// IMAGES
let URL = "https://www.dnd5eapi.co"
let imageURL = "/api/2014/images/monsters/"
fetch("https:www.dnd5eapi.co/api/2014/monsters", requestOptions)
.then((response)=>(response.text())
.then((response2)=>JSON.parse(response2)))
.then(response3 => {
    console.log("Response 3 is ", response3.results)
    let arrayData = response3.results
    let arr = []
    for(let i = 0; i < 8; i++){
        arr.push(arrayData[i].index)
        
    }
    console.log("the value of arr is...", arr)
    return arr
})
.then(arrayNames => {
    let listofObjects = [];
    arrayNames.forEach(function(entry) {
        console.log("Entry",URL + imageURL + entry + ".png")
        let image = URL + imageURL + entry + ".png"
        let obj = {};
        obj['name'] = entry;
        obj['image'] = image;
        listofObjects.push(obj);
    })
    return listofObjects


})
.then(response4 => {
    var output = document.getElementById("inner-container")
    console.log("What is the output?", output)
    console.log("response4",response4)
    response4.forEach(function(item){
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("monsterimage");
        img.src = item.image;
        img.alt = item.name;

        const caption = document.createElement("p");
        caption.textContent = item.name;

        card.appendChild(img);
        card.appendChild(caption);
        output.appendChild(card);
        
        
    })
})
.catch((error) => console.error(error))