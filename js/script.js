// console.log("Yes! Atteched");

// ---------------- Varible Zone --------------------- //

// Dirextion of snake //

let inputDirection = { x: 0, y: 0 };

// Music varible //

const gameMusic = new Audio('../music/music.mp3')
const foodMusic = new Audio('../music/food.mp3')
const moveMusic = new Audio('../music/move.mp3')
const gameOverMusic = new Audio('../music/over.mp3')

// -- Snake Body -- //

let snakeArray = [

    // Head //
    {
        x: 13,
        y: 15
    }
];

// food co-ordi //

foodLocation = { x: 17, y: 12 };

// -- Html Elements --- //

let board = document.getElementById('board');


// ---------------- --------  --------------------- //
// -------------- Functions --------------- //

function GameStarts() {

    setInterval(() => {

        gameEngine();

    }, 1000);

}

function gameEngine() {

    // Part 1 : Updating the sanke Array and Food //

    // Part 2 : Displaying the sanke and Food //

    // board.innerHTML="";

    snakeArray.forEach((element, index) => {
        //  console.log(`Element-X : ${element.x} Element-Y : ${element.y} Index : ${index}`); 


        //  Creating and displaying  a Body Of a Snake //
        let snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = element.y;
        snakeBody.style.gridColumnStart = element.x;
        snakeBody.classList.add('Snake');

        if (index === 0) {
            snakeBody.classList.add('Head');
        }

        else {
            snakeBody.classList.add('Snake');

        }

        board.appendChild(snakeBody);

        //  Creating and displaying  a Body Of a Snake //
        let foodBody = document.createElement('div');
        foodBody.style.gridRowStart = foodLocation.x;
        foodBody.style.gridColumnStart = foodLocation.y;
        foodBody.classList.add('Food');
        board.appendChild(foodBody);

    });

}

// ---------------- --------  --------------------- //
// ----------------  Main Logic   --------------------- //
GameStarts();
// gameMusic.play();
//  If any Key Press Then Start the Game //

window.addEventListener('keydown', (element) => {


    switch (element.key) {

        case "ArrowUp":

            moveMusic.play();

            inputDirection.x = 0;
            inputDirection.y = 1;

            break;

        case "ArrowDown":

            moveMusic.play();

            inputDirection.x = 0;
            inputDirection.y = -1;

            break;

        case "ArrowLeft":

            moveMusic.play();

            inputDirection.x = -1;
            inputDirection.y = 0;

            break;

        case "ArrowRight":

            moveMusic.play();

            inputDirection.x = 1;
            inputDirection.y = 0;

            break;

        default:
            break;
    }




});




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
