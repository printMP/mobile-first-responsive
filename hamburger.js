// On click
const menu_items = document.getElementById("menu_items");
let menu = (elem)=> { 
    console.log("THIS is", elem.nextElementSibling.style.display);
    if(elem.nextElementSibling.style.display == ""){
         menu_items.style.display = "flex"  
    }
    else{
        menu_items.style.display = "" 
    }
}