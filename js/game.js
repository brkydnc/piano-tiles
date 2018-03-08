//All modifies and other things will go here
const ROWS = [];
for (y = -10; y < config.screen.tileCapacity.forHeight; y++) {
    ROWS.push(new Row(y * config.tile.height, generateArray()))
}
function game() {
    ROWS.forEach(row => {
        row.drawTiles()
        row.updateTiles()
    })
}
console.log("Game is paused at the moment")
console.log("Use 'config.game.isPaused = false'")