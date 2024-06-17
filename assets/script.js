let board, context, dinoImg, cactus1Img, cactus2Img, cactus3Img, cactusArray = [], velocityX = -8, velocityY = 0, gravity = .4, gameOver = false, score = 0;

let dino = { x : 50, y : 156, width : 88, height : 94 }
let cactus = { img : null, x : 700, y : 180, width : null, height: 70 }

window.onload = () => {
    board = document.getElementById("board");
    board.height = 250;
    board.width = 750;
    context = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = () => context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";
    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";
    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
    document.addEventListener("keydown", moveDino);
}

function update() {
    if (gameOver) return;
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, 156);
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    cactusArray.forEach(cactus => {
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
        if (detectCollision(dino, cactus)) endGame();
    });

    context.fillStyle="black";
    context.font="20px courier";
    context.fillText(++score, 5, 20);
}

function moveDino(e) {
    if (gameOver || e.code != "Space" && e.code != "ArrowUp" || dino.y != 156) return;
    velocityY = -10;
}

function placeCactus() {
    if (gameOver) return;
    let placeCactusChance = Math.random();
    cactus.img = placeCactusChance > .90 ? cactus3Img : placeCactusChance > .70 ? cactus2Img : cactus1Img;
    cactus.width = placeCactusChance > .90 ? 102 : placeCactusChance > .70 ? 69 : 34;
    cactusArray.push({...cactus});
    if (cactusArray.length > 5) cactusArray.shift();
}

function detectCollision(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function endGame() {
    gameOver = true;
    dinoImg.src = "./img/dino-dead.png";
    dinoImg.onload = () => context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
}
