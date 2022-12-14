// ---------------- Varible Zone --------------------- //

// Step  of snake to Move at Particular Diection  //
let inputDirection = { x: 0, y: 0 };

// Music varible //
const gameMusic = new Audio('../music/music.mp3')
const foodMusic = new Audio('../music/food.mp3')
const moveMusic = new Audio('../music/move.mp3')
const gameOverMusic = new Audio('../music/gameover.mp3')

// -- Snake Body -- //
let snakeArray = [
    // Head //
    {
        x: 13,
        y: 15
    }
];

// food co-ordi //
foodLocation = { x: 6, y: 7 };

// score//
let score = 0;

// for popuo //
let flag = true;

// for snake body//
let foodBody,snakeBody;
let headDeg=0,bodyDeg=0;

// -- Html Elements --- //
let board = document.getElementById('board');

// score element
normScore = document.getElementById('nrmlScore');
highScoreElement = document.getElementById('highScore');

// ------- Accsess All Popup element --------- //
let popContainer = document.getElementById("popup");

let popStatus = document.getElementById("pop-status");

// let popAnswer = document.getElementById("pop-answer");

let popCorrect = document.getElementById("pop-ans");

let popScore = document.getElementById("pop-score");

let btnOk = document.getElementById("ok");

// ---------------- --------  --------------------- //
// -------------- Functions --------------- //

function GameStarts() {    

    setInterval(() => {

        gameEngine();
        
        }, 200);

        
}

function isCollide(snake) {
    // Two Possibility  : (1) Bump Into Self (2) Hit With Borders

    // --- Bump into self : Head Location and One Body Elemenr Location will be same  --- //

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;

        }
    }

    // --- Reach to Border --- //

    //  Maximum X,Y : 18 , Minimum X,y : 1
    if ((snake[0].x <= 1 || snake[0].x >= 18) || (snake[0].y <= 1 || snake[0].y >= 18)) {
        return true;
    }

    return false;
}

function gameEngine() {
    // Part 1 : Updating the sanke Array and Food //

    if (flag==true)
    {
        gameMusic.play();
        
    }


    // If It Collide //
    if (isCollide(snakeArray)) {
        gameOverMusic.play();
        gameMusic.pause();
        inputDirection = { x: 0, y: 0 };

        // -- Open Popup --  //
        popScore.innerText = score;
        popContainer.classList.add("Open-Popup");
        flag = false;


        snakeArray = [{ x: 13, y: 15 }]; /* Imprtant!  */
        score = 00;
        normScore.innerHTML = score;

    }

    // ------------ Stop Exexcution when Popup is shown ----------- //

    // If eaten Food  : Increment score and regenerate new food//

    if (snakeArray[0].y === foodLocation.y && snakeArray[0].x === foodLocation.x) {
        // console.log("Ya working!");

        score += 1;
        normScore.innerHTML = score;


        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            highScoreElement.innerHTML = hiscoreval;
        }

        foodMusic.play();
        // Shifting a Head To ahead it shows Body Increament by One piece //
        snakeArray.unshift({ x: snakeArray[0].x + inputDirection.x, y: snakeArray[0].y + inputDirection.y });

        // Reset New Location For Food (Random). Genertaing between 2 and 16 (Both Inclusive) //
        let a = 2, b = 16;
        foodLocation = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    // ---- Moving The Snake ---  //

    for (let i = snakeArray.length - 2; i >= 0; i--) {
        // const element = array[i];

        snakeArray[i + 1] = { ...snakeArray[i] }; // swallow copy 

        // WE are moving all element to its previous element , starting from second last elemnt //
    }

    // Move Head to Next  //
    snakeArray[0].x += inputDirection.x;
    snakeArray[0].y += inputDirection.y;


    // Part 2 : Displaying the sanke and Food //

    board.innerHTML = "";

    snakeArray.forEach((element, index) => {
        //  console.log(`Element-X : ${element.x} Element-Y : ${element.y} Index : ${index}`); 


        //  Creating and displaying  a Body Of a Snake //
        snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = element.y;
        snakeBody.style.gridColumnStart = element.x;

        
        // snakeBody.classList.add('Snake');
        
        if (index == 0) {
            snakeBody.classList.add('Head');
            snakeBody.style.transform=`rotate(${headDeg}deg)`;
        }

        else {
            snakeBody.classList.add('Snake');
            snakeBody.style.transform=`rotate(${bodyDeg}deg)`;
        }

        board.appendChild(snakeBody);

    });

    //  Creating and displaying  a Body Of a Snake //
    foodBody = document.createElement('div');
    foodBody.style.gridRowStart = foodLocation.y;/* Made Biggest Mistake Here comes y not x */
    foodBody.style.gridColumnStart = foodLocation.x;
    foodBody.classList.add('Food');
    board.appendChild(foodBody);
}

// ---------------- --------  --------------------- //
// ----------------  Main Logic   --------------------- //
GameStarts();

// -------- Local Storage For High Score ------------- //


let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else {
    hiscoreval = JSON.parse(hiscore);
    highScoreElement.innerHTML = hiscore;
}



//  If any Key Press Then Start the Game //
window.addEventListener('keydown', (element) => {

    if (flag == true) {


        switch (element.key) {

            case "ArrowUp":

                moveMusic.play();

                inputDirection.x = 0;
                inputDirection.y = -1;
                headDeg=180;
                bodyDeg=90;
                break;

            case "ArrowDown":

                moveMusic.play();

                inputDirection.x = 0;
                inputDirection.y = 1;
                headDeg=0;
                bodyDeg=90;
                break;

            case "ArrowLeft":

                moveMusic.play();

                inputDirection.x = -1;
                inputDirection.y = 0;
                headDeg=90;
                bodyDeg=0;
                break;

            case "ArrowRight":

                moveMusic.play();

                inputDirection.x = 1;
                inputDirection.y = 0;
                headDeg=270;
                bodyDeg=0;

                break;

            default:
                break;
        }
    }




});

// ---------- Close popup ---------- //

const Close = () => {

    popContainer.classList.remove("Open-Popup");
    flag = true;
    gameMusic.play();
    // Pop.classList.add("Close-Popup")
};

btnOk.addEventListener('click', Close);

// ---------------- --------  --------------------- //

// --------------  Extra --------------- //

/* contolling frame speed //
let speed = 2;
let lastPaintTime = 0;
*/

/*
window.requestAnimationFrame(Main); // When We Use Animation Then Use This Method rather than setInterval.
*/

/*
function Main(currentTime) {
    // Recalling again //

    window.requestAnimationFrame(Main);

    // console.log("Current : -  " + currentTime);
    // console.log("LAst : -  " + lastPaintTime);

    if ((currentTime - lastPaintTime) / 1000 < (1 / speed)) {
        return;
    }

    lastPaintTime = currentTime;

    gameEngine();

}*/

// ---------------- --------  --------------------- //
