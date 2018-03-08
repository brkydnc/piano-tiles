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
    //+1 cause of tike strokes
    createCanvas(config.screen.width+1,config.screen.height+1);
    const TILES = [];   
};

var r = new Row(0,generateArray())

function draw() {
    background(0,200,5)
    r.drawTiles()
};