# piano-tiles
Piano tiles with p5.js

### Warn
Open index.html and then open the console to see your stats when the game is over.

### Options
You can modify the size of the screen or tile capacity by using: 
```javascript
//Example , (4:7 ratio is the best btw for w:h)
config.screen.width = 400;
config.screen.height = 700;
config.screen.tileCapacity.forWidth = 100; // That makes too much rows 
config.screen.tileCapacity.forHeight = 100;
```

You can change colors of keys by using (i'll add rainbow colored keys mode later):
```javascript
//Example
config.tile.unclickableKeyColor = "white";  
config.tile.clickableKeyColor = "green";      
config.tile.clickedKeyColor = "magenta";
```

You can also change initial scroll speed or increasing ratio or etc. by using:
```javascript
//Example
config.game.pointPerClick = 84363049528189475386434692049835743065827683469346;
config.game.initialScrollSpeed = 25;
config.game.scrollValue = -5; //Negative reals will make it reversed
```
