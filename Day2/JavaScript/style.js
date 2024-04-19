var btn = document.querySelector("#btn");
var diceFrame = document.querySelector('.dice_frame');

var[diceImg] = diceFrame.children;

btn.addEventListener('click',()=>{
    var num =  Math.floor(Math.random() * 6) + 1; 
    diceImg.src = "../Images/"+num+".png";
})