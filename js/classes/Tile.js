function Tile(_x, _y, c) {
    this.posX = _x;
    this.posY = _y;
    this.isClickable = c;
    this.isClicked = false;
    this.isLocked = true;
    this.color;
    (this.isClickable) ? (this.color = config.tile.clickableKeyColor) : (this.color = config.tile.unclickableKeyColor);

    this.update = function () {
        this.posY += config.game.scrollSpeed;
        this.isClicked ? (this.color = config.tile.clickedKeyColor) : null;
    };
    this.draw = function () {
        fill(this.color);
        rect(this.posX, this.posY, config.tile.width, config.tile.height);
    };
}