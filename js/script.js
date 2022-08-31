// console.log("Yes! Atteched");

// ---------------- Varible Zone --------------------- //

// Dirextion of snake //

let Direction = { x: 0, y: 0 };

// Music varible //

const gameMusic = new Audio('../music/music.mp3')
const foodMusic = new Audio('../music/food.mp3')
const moveMusic = new Audio('../music/move.mp3')
const gameOverMusic = new Audio('../music/over.mp3')

// contolling frame speed //

let speed = 2;
let lastPaintTime = 0;

// -- Snake Body -- //

let snakeArray = [

    // Head //
    {
        x: 13,
        y: 15
    }
];

// -- Html Elements --- //

let board=document.getElementById('board');


// ---------------- --------  --------------------- //
// -------------- Functions --------------- //

function GameStarts(){

    setInterval(() => {

        gameEngine();
        
    }, 1000);

}

function gameEngine() {

    // Part 1 : Updating the sanke Array and Food //

    // Part 2 : Displaying the sanke and Food //
    board.innerHTML="";

    snakeArray.forEach( (element,index ) =>
    {
    //  console.log(`Element-X : ${element.x} Element-Y : ${element.y} Index : ${index}`); 
    
    
        //  Creating a Body Of a Snake //
        let snakeBody=document.createElement('div');
        snakeBody.style.gridRowStart=element.y;
        snakeBody.style.gridColumnStart=element.x;
        // snakeBody.style.width="20px";
        // snakeBody.style.height="20px";
        // snakeBody.style.background="red";


    });

}

// ---------------- --------  --------------------- //

GameStarts();

// --------------  Extra --------------- //

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
