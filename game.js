document.getElementById('startGame').addEventListener('click', function() {
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    startGame(1);
});

let currentLevel = 1;

function startGame(level) {
    currentLevel = level;
    createBoard(level);
    placePlayer();
}

function createBoard(level) {
    const gameScreen = document.getElementById('gameScreen');
    gameScreen.innerHTML = '';
    const boardSize = level === 1 ? 8 : level === 2 ? 16 : 32;
    const tileSize = gameScreen.offsetWidth / boardSize;

    for (let i = 0; i < boardSize * boardSize; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        gameScreen.appendChild(tile);
    }
}

function placePlayer() {
    const player = document.createElement('div');
    player.classList.add('player');
    player.style.width = `${document.querySelector('.tile').offsetWidth}px`;
    player.style.height = `${document.querySelector('.tile').offsetHeight}px`;
    document.getElementById('gameScreen').appendChild(player);
}

// Add more game logic, controls, and level design here
document.addEventListener('keydown', handleKeyPress);

let playerPosition = { x: 0, y: 0 }; // Starting position of the player

function handleKeyPress(e) {
    const tileSize = document.querySelector('.tile').offsetWidth;
    switch (e.key) {
        case 'ArrowUp':
            movePlayer(0, -tileSize);
            break;
        case 'ArrowDown':
            movePlayer(0, tileSize);
            break;
        case 'ArrowLeft':
            movePlayer(-tileSize, 0);
            break;
        case 'ArrowRight':
            movePlayer(tileSize, 0);
            break;
    }
}

function movePlayer(x, y) {
    const player = document.querySelector('.player');
    playerPosition.x += x;
    playerPosition.y += y;
    player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;
}

// Example of placing an enemy on the board
function placeEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.width = `${document.querySelector('.tile').offsetWidth}px`;
    enemy.style.height = `${document.querySelector('.tile').offsetHeight}px`;
    // Set enemy's initial position
    enemy.style.transform = 'translate(100px, 100px)'; // Example position
    document.getElementById('gameScreen').appendChild(enemy);
}

// Call this function in your startGame or createBoard function
placeEnemy();

