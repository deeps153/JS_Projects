const FAQ = [
    {
        question: "What is HTML?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit aliquam reiciendis ametquisquam laborum, vero deserunt aperiam ducimus."
    },

    {
        question: "What is CSS?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit aliquam reiciendis ametquisquam laborum, vero deserunt aperiam ducimus."
    },

    {
        question: "What is JavaScript?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit aliquam reiciendis ametquisquam laborum, vero deserunt aperiam ducimus."
    },

    {
        question: "What is React JS?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit aliquam reiciendis ametquisquam laborum, vero deserunt aperiam ducimus."
    },

    {
        question: "What is Node JS?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit aliquam reiciendis ametquisquam laborum, vero deserunt aperiam ducimus."
    },
]

var jsonObj = JSON.stringify(FAQ);


// variables


var container = document.querySelector('.container');



// **********

FAQ.forEach((questions) => {

    console.log(questions);

    var faq_qa = ` 
    <div class="faq">
        <div class="qa flex-r">
            <div class="question">
                ${questions.question}
            </div>
            <div class="buttons flex-r">
                <div class="down">
                    <i style="font-size:24px" class="fa">&#xf107;</i>
                </div>
                <div class="close">
                    <i style="font-size:24px; font-weight: 100;" class="fa">&#xf05c;</i>
                </div>
            </div>
        </div>
        <div class="answer">
            ${questions.answer}
        </div>
    </div>
`
    container.insertAdjacentHTML('beforeend', faq_qa);

});

// ...............append..................


// down.addEventListener("click",()=>{
//     answer.classList.remove("active");
//     close.classList.remove("active");
//     down.classList.add("active");
// })

// close.forEach((close1)=>{
//     console.log(close1);
//     close1.addEventListener("click",()=>{
//         answer.classList.add("active");
//         down.classList.remove("active");
//         close.classList.add("active");
//     })
// })

const down = document.querySelectorAll(".down");
console.log({ down });
const closeButtons = document.querySelectorAll(".close");
const qa = document.querySelector(".qa");
const answer = document.querySelector(".answer");
const faq = document.querySelector(".faq");

closeButtons.forEach((closeButton) => {
    console.log({ closeButton });
    closeButton.addEventListener("click", () => {
        closeButton.closest('.qa').classList.remove("active");
    });
});

down.forEach((down1) => {
    console.log({ down1 });
    down1.addEventListener("click", () => {
        down1.closest('.qa').classList.add("active");
    });
});
