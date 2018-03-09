function setup(){
    //+1 cause of tile strokes
    createCanvas(config.screen.width+1,config.screen.height+1);
    game()
};
function draw() {
    if(!config.game.isPaused){
        background(255,0,255);
        game()
    }
};
function keyPressed() {
    if(key == "P" && config.game.isPaused){
        config.game.isPaused = false;
    } else if (key == "P" && !config.game.isPaused){
        config.game.isPaused = true;
    } else if (keyCode === 38){
        config.game.scrollSpeed += 1
    } else if (keyCode === 40) {
        config.game.scrollSpeed -= 1
    }
}