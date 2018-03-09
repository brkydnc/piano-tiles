function Row(_y, row) {
    row.length != config.screen.tileCapacity.forWidth
        ? console.error("Row size is not equal to screen tile capacity")
        : null;
    this.tiles = [];
    this.posY = _y;
    this.isClicked = false;
    //Add tiles in this row
    for (w = 0; w < config.screen.tileCapacity.forWidth; w++) {
        if (row[w] === 0) {
            this.tiles.push(new Tile(config.tile.width * w, _y, false));
        } else {
            this.tiles.push(new Tile(config.tile.width * w, _y, true));
        }
    }
    this.updateTiles = function () {
        this.tiles.forEach(tile => {
            tile.update();
        });
        this.posY += config.game.scrollSpeed;
    };
    this.drawTiles = function () {
        this.tiles.forEach(tile => {
            tile.draw();
        });
    };
}