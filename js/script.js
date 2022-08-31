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

// contolling frame speed 
let speed = 5;
let lastPaintTime = 0;

// score//
let score = 0;

// -- Html Elements --- //
let board = document.getElementById('board');


// ---------------- --------  --------------------- //
// -------------- Functions --------------- //

// function GameStarts() {

//     setInterval(() => {

//         gameEngine();

//     }, 500);

// }

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

}

function isCollide(snake) 
{
    // Two Possibility  : (1) Bump Into Self (2) Hit With Borders

    // --- Bump into self : Head Location and One Body Elemenr Location will be same  --- //

    for (let i = 1; i < snake.length; i++) 
    {
            if (snake[0].x===snake[i].x && snake[0].y===snake[i].y)
            { 
                 return true;
                
            }      
    }

    // --- Reach to Border --- //

    //  Maximum X,Y : 18 , Minimum X,y : 1
    if ( (snake[0].x<=1 || snake[0].x>=18 ) || (snake[0].y<=1 || snake[0].y>=18))
    {
                return true;
    }
    
    return false;
}

function gameEngine() {
// console.log( `X:  ${snakeArray[0].x}  , Y : ${snakeArray[0].y}`);
    // Part 1 : Updating the sanke Array and Food //

    // If It Collide //
    if (isCollide(snakeArray)) 
    {
        gameOverMusic.play();
        // gameMusic.pause();
        inputDirection = { x: 0, y: 0 };
        alert("Game Over! Press any Key To  Play Again.");
        snakeArray = [{x: 13, y: 15}]; /* Imprtant!  */
        // gameMusic.play();
        score = 0;
    }

    // If eaten Food  : Increment score and regenerate new food//

    if (snakeArray[0].y === foodLocation.y && snakeArray[0].x === foodLocation.x) {
        // console.log("Ya working!");

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

    });
    
    //  Creating and displaying  a Body Of a Snake //
    let foodBody = document.createElement('div');
    foodBody.style.gridRowStart = foodLocation.y;/* Made Biggest Mistake Here comes y not x */
    foodBody.style.gridColumnStart = foodLocation.x;
    foodBody.classList.add('Food');
    board.appendChild(foodBody);
}

// ---------------- --------  --------------------- //
// ----------------  Main Logic   --------------------- //
// GameStarts();

window.requestAnimationFrame(Main); // When We Use Animation Then Use This Method rather than setInterval.
// gameMusic.play();



//  If any Key Press Then Start the Game //
window.addEventListener('keydown', (element) => {

    // inputDirection = {x: 0, y: 1} // Start the game


    switch (element.key) {

        case "ArrowUp":

            moveMusic.play();

            inputDirection.x = 0;
            inputDirection.y = -1;

            break;

        case "ArrowDown":

            moveMusic.play();

            inputDirection.x = 0;
            inputDirection.y = 1;

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
