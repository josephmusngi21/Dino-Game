# Dino-Game

This is a simple implementation of the Chrome Dino game. The player controls a dinosaur by making it jump over cacti to earn points. The game ends when the dinosaur collides with a cactus.


## Variables

- `board`, `context`: These are used for the game board.
- `dinoImg`, `cactus1Img`, `cactus2Img`, `cactus3Img`: These are the images used in the game.
- `cactusArray`: This is an array that stores the cacti in the game.
- `velocityX`, `velocityY`: These represent the velocities of the dinosaur.
- `gravity`: This is the gravity that pulls the dinosaur down.
- `gameOver`: This is a boolean that checks if the game is over.
- `score`: This is the player's score.

## Functions

- `window.onload`: This function initializes the game.
- `update`: This function updates the game state.
- `moveDino`: This function controls the dinosaur's movement.
- `placeCactus`: This function places a cactus in the game.
- `detectCollision`: This function checks for collisions between the dinosaur and a cactus.
- `endGame`: This function ends the game.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the HTML file in your browser to start the game. 

The game also includes a CSS file for styling. Press the Space key or the ArrowUp key to make the dinosaur jump.

Enjoy the game!