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
    for(i=0; i<config.screen.tileCapacity.forWidth - 1; i++){
        arr.push(0)
    };
    return shuffle(arr);
};

function setup(){
    //+1 cause of tiLe strokes
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