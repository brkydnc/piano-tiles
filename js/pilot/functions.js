function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function generateArray() {
    var arr = [1];
    for (i = 0; i < config.screen.tileCapacity.forWidth - 1; i++) {
        arr.push(0);
    }
    return shuffle(arr);
}

function remoteGame(key) {
    if (key == "P" && config.game.isPaused) {
        config.game.isPaused = false;
    } else if (key == "P" && !config.game.isPaused) {
        config.game.isPaused = true;
    } else if (keyCode === 38) {
        config.game.scrollSpeed += 1;
    } else if (keyCode === 40) {
        config.game.scrollSpeed -= 1;
    }
}

function clickTile() {
    ROWS.forEach((row, index, array) => {
        row.tiles.forEach(tile => {
            if (
                checkIfIn(
                    mouseX,
                    mouseY,
                    tile.posX,
                    tile.posY,
                    config.tile.width,
                    config.tile.height
                )
            ) {
                if (!tile.isLocked && tile.isClickable) {
                    tile.isClickable = false;
                    tile.isClicked = true;
                    config.game.score += config.game.pointPerClick;
                    config.game.scrollSpeed += config.game.scrollValue;
                    updateLast(index);
                    row.isClicked = true;
                    row.tiles.forEach(tile => {
                        tile.isLocked = true;
                    });
                } else if (
                    !tile.isLocked &&
                    !tile.isClickable &&
                    lastRow.tiles.includes(tile)
                ) {
                    tile.color = "red";
                    config.game.isOver = true;
                }
            }
        });
    });
}

function updateLast(index) {
    lastRow = ROWS[index - 1];
    lastRow.tiles.forEach(tile => {
        tile.isLocked = false;
        if (tile.isClickable) {
            tile.color = "green";
        }
    });
}

function checkIfIn(x, y, tx, ty, sx, sy) {
    if (x > tx && x < tx + sx && y > ty && y < ty + sy) {
        return true;
    } else {
        return false;
    }
}

function startGame() {
    config.game.isStarted = true;
    config.game.isPaused = false;
    config.game.scrollSpeed = config.game.initialScrollSpeed;
}

var printCount = 0;
function finishGame() {
    config.game.isPaused = true;
    config.game.isOver = true;
    if (printCount < 1) {
        console.log("Game is over.");
        console.log("Your score was: " + config.game.score);
        console.log("Max speed was: " + config.game.scrollSpeed);
        printCount++;
    }
}