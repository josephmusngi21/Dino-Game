//board

let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

//class/object for dino
let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//cactus 
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;


window.onload =  function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("get2d");  // used to draw on the board

    dinoImg = new Image(); 
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cactus1Img = new image ();
    cactus1Img.src = "./img/cactus1.png";

    cactus2Img = new image ();
    cactus2Img.src = "./img/cactus2.png";

    cactus3Img = new image ();
    cactus3Img.src = "./img/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
}

function update() {
    requestAnimationFrame(update);

    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    
}

function placeCactus(){

    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width:  null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random(); //gives number 0 to 0.9999...

    if (placeCactusChance > 0.90) {
        cactus.img = cactus3Img;
        cactus.width = cactus.cactus3Width;
        cactusArray.push(cactus);
    } else if (placeCactusChance > 0.70){
        cactus.img = cactus2Img;
        cactus.width = cactus.cactus2Width;
        cactusArray.push(cactus);
    } else if (placeCactusChance > 0.50) {
        cactus.img = cactus1Img;
        cactus.width = cactus.cactus1Width;
        cactusArray.push(cactus);
    }

}