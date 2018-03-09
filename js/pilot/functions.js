function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};

function generateArray() {
    var arr = [1];
    for (i = 0; i < config.screen.tileCapacity.forWidth - 1; i++) {
        arr.push(0)
    };
    return shuffle(arr);
};

function remoteGame(key) {
    if (key == "P" && config.game.isPaused) {
        config.game.isPaused = false;
    } else if (key == "P" && !config.game.isPaused) {
        config.game.isPaused = true;
    } else if (keyCode === 38) {
        config.game.scrollSpeed += 1
    } else if (keyCode === 40) {
        config.game.scrollSpeed -= 1
    }
 }

function clickTile(){
    ROWS.forEach(row => {
        row.tiles.forEach(tile => {
            if(tile.posX < mouseX && 
               (tile.posX + config.tile.width) > mouseX && 
               tile.posY < mouseY && 
               (tile.posY + config.tile.height) > mouseY &&
               tile.isClickable){
                   tile.isClickable = false;
                   tile.isClicked = true;
                   config.game.score += config.game.pointPerClick;
                   config.game.scrollSpeed += config.game.scrollValue 
               };
        });
    });
}