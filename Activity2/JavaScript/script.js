
// 

var button = document.querySelector("#btn");
var diceFrame = document.querySelector(".dice_frame");
var userName = document.querySelector(".user_name").innerText;
var userOneScore = document.querySelector('.score1');
var userTwoScore = document.querySelector('.score2');
const audioElement = document.getElementById('audio');
var oneLogic = 2;

// for audo
function playAudio() {
    if (!audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    audioElement.play();
}


var score1 = 0;
var score2 = 0;

var swap = true;

var maxScrore = 50;

// console.log(randomNum);

var [diceImg] = diceFrame.children;
console.log(diceImg);



// KEYPRESS

document.addEventListener('keydown', function (event) {
    if (event.key === 'P' || event.key === 'p') {
        button.click();
    }
});

//TWO


var randomNum;

button.addEventListener('click', () => {


    randomNum = Math.floor(Math.random() * 6) + 1;
    diceImg.src = "./Images/" + randomNum + ".png";


    if (swap) {
        console.log({swap});

        if (randomNum != 6) {
            swap = !swap;
        }

        if (randomNum != 1) {
            score1 += randomNum;
            console.log({ score1 });
            userOneScore.innerText = score1;

        }

        if (randomNum == 1) {

            while (oneLogic > 0) {
                randomNum = Math.floor(Math.random() * 6) + 1;
                diceImg.src = "./Images/" + randomNum + ".png";

                console.log({ oneLogic });

                if (randomNum != 6) {
                    swap = !swap;
                }

                score2 += randomNum;
                console.log({ score2 });
                userTwoScore.innerText = score2;
                oneLogic--;
            }
        }
        oneLogic = 2;

        // score1 += randomNum;
        // userOneScore.innerText = score1;

        document.querySelector('.user1').style.opacity = '1';

        document.querySelector('.user2').style.opacity = '.2';

    } else {
        console.log({swap});


        if (randomNum != 6) {
            swap = !swap;
        }

        if (randomNum != 1) {
            console.log({ score2 });
            score2 += randomNum;
            userTwoScore.innerText = score2;
        }

        if (randomNum == 1) {
            while (oneLogic > 0) {
                randomNum = Math.floor(Math.random() * 6) + 1;
                diceImg.src = "./Images/" + randomNum + ".png";


                console.log("else",{ oneLogic });

                if (randomNum != 6) {
                    swap = !swap;
                }


                score1 += randomNum;
                console.log({ score1 });
                userOneScore.innerText = score1;

                oneLogic--;
            }
        }
        oneLogic = 2;

        document.querySelector('.user2').style.opacity = '1';
        document.querySelector('.user1').style.opacity = '.2';

    }

    if (score1 >= 50 || score2 >= 50) {
        if (score1 >= 50) {

            var win = "🤴hhh !! Jennie Wins✨🎉";
            playAudio();
        } else {
            var win = "🤴hhh !! Thomas Wins✨🎉";
            playAudio();
        }
        document.querySelector(".win").innerText = win;
        score1 = 0;
        score2 = 0;
    } else {
        document.querySelector(".win").innerHTML = ' ';
    }

})



