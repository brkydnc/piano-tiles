function setup(){
    //+1 cause of tile strokes
    createCanvas(config.screen.width+1,config.screen.height+1);
};

//Example
const ROWS = [];   
for(y=0;y<config.screen.tileCapacity.forHeight;y++){
    ROWS.push(new Row(y * config.tile.height , generateArray()))
}

function draw() {
    background(0,200,5)
    ROWS.forEach(row => {
        row.drawTiles()
    })
};