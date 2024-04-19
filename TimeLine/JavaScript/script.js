var progressLine = document.querySelector(".progress-line");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var title = document.querySelector("h3");
var circle = document.querySelectorAll(".circle");


var step = 0;

function showText() {
    if (step >= 0 && step < 33) {
        title.innerText = "Interview and Training";
     
        setTimeout(()=>{
            circle[0].style.backgroundColor="#22A699";
            circle[1].style.backgroundColor="#1D5B79";
        },2000)
        
    }
    else if (step >= 33.3 && step < 66.6) {
        title.innerText = "Level 1 Completed!!"
  
        setTimeout(()=>{
            circle[1].style.backgroundColor="#22A699";
            circle[2].style.backgroundColor="#1D5B79";
        },2000)
      

    } else if (step >= 66.6 && step < 99) {
        title.innerText = "Level 2 Completed!!"
    
        setTimeout(()=>{
            circle[2].style.backgroundColor="#22A699";
            circle[3].style.backgroundColor="#1D5B79" ;  
        },2000)
        
    } else {
        title.innerText = "Welcome To Team!!"
        setTimeout(()=>{
            circle[3].style.backgroundColor="red";

        },2000)
    }
}

next.addEventListener('click', () => {

    console.log('next', step);
    if (step <= 67) {
        progressLine.style.width = `${step = step + 32.3}%`;
        step++;
    } else {
        next.style.backgroundColor = 'grey';
    }

    showText();
    prev.style.backgroundColor = '#468B97';

})

prev.addEventListener('click', () => {
    if (step >= 1) {
        console.log('prev', step);
        --step;
        progressLine.style.width = `${step = step - 32.3}%`;
    } else {
        prev.style.backgroundColor = 'grey';
    }

    showText();
    next.style.backgroundColor = '#468B97';


})



