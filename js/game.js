//All modifies and other things will go here
const ROWS = [];
for (y = -2; y < config.screen.tileCapacity.forHeight; y++) {
    ROWS.push(new Row(y * config.tile.height, generateArray()));
};
function game() {
    ROWS.forEach((row, index, array) => {
        if(row.posY >= config.screen.height){
            array.splice(index,1);
            array.unshift(new Row(ROWS[0].posY-config.tile.height,generateArray()))
        }else{
            row.drawTiles()
            row.updateTiles()
        };
    });
};
