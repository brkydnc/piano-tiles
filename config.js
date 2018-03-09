const config = {
    screen:{
        tileCapacity:{}
    },
    game:{},
    tile:{}
};

//Game
config.game.scrollSpeed = 1;
config.game.pointPerScore = 1;
config.game.isPaused = true;

//Screen
config.screen.width = 400;
config.screen.height = 700;
config.screen.tileCapacity.forWidth = 5;
config.screen.tileCapacity.forHeight = 5;

//Tile
config.tile.width = config.screen.width / config.screen.tileCapacity.forWidth;
config.tile.height = config.screen.height / config.screen.tileCapacity.forHeight;
config.tile.unclickableKeyColor = 255;  //White
config.tile.clickableKeyColor = 0;      //Black
config.tile.clickedKeyColor = 150;      //Gray