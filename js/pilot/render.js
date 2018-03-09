function setup(){
    //+1 cause of tile strokes
    createCanvas(config.screen.width+1,config.screen.height+1);
    game();
};

function draw() {
    if(!config.game.isPaused){
        background(255,0,255);
        game()
    };
};

function keyPressed() {
    remoteGame(key);
}
function mousePressed(){
    if(!config.game.isPaused){
        clickTile();
    }
}