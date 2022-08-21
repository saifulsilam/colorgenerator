// HexaDecimal Array
const hexColor =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// Selecting  Color Box and code showing are
const colorbox =document.getElementsByClassName("colorBox");
const codeBox=document.getElementsByClassName("code");
var copyText = document.getElementById("myInput");
// selecting generator button to add functionality
const generatorBtn = document.getElementById("btn");

//  In button , adding click event and then changing color based on color code
generatorBtn.addEventListener("click", function(){
    
    let hex = "#";
    for(let i=0;i<6;i++){
        hex+=hexColor[getRandomColor()]
    }
    // Changing color
    colorbox[0].style.backgroundColor=hex;
    // Changin Color code 
    codeBox[0].innerHTML=hex;
    // copy button creator 
    copyText.value=hex;

})
//  creating random color code 
function getRandomColor(){
    return Math.floor(Math.random() * hexColor.length );
}
//  Creating function for copy the color code 
function copy(){
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Color code: " + copyText.value);

}