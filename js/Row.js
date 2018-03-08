function Row(y,row) {
    (row.length != config.screen.tileCapacity.forWidth) ? console.error("Row size is not equal to screen tile capacity") : null
    this.tiles = [];
    //Add tiles in this row
    for(w=0; w < config.screen.tileCapacity.forWidth; w++){
        if(row[w] === 0){
            this.tiles.push(new Tile(config.tile.width * w, y, false))
        }else{
            this.tiles.push(new Tile(config.tile.width * w, y, true))
        };   
    };
    this.updateTiles = function() {
        this.tiles.forEach(tile => {
            tile.update();
        });
    };
    this.drawTiles = function () {
        this.tiles.forEach(tile => {
            tile.draw();
        });
    };
};