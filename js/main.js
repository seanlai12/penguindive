// 1 - Start enchant.js
enchant();
 
// 2 - On document load 
window.onload = function() {
	// Once Game finishes loading
console.log("Hi, Ocean!");
var scene = new SceneGame();
game.pushScene(scene);
	}

	// 7 - Start
	game.start(); 
	  var SceneGame = Class.create(Scene, {
     // The main gameplay scene.     
    initialize: function() {
        var game, label, bg;
 
        // 1 - Call superclass constructor
        Scene.apply(this);
        // 2 - Access to the game singleton instance
        game = Game.instance;
        // 3 - Create child nodes
        label = new Label("Hi, Ocean!");        
        bg = new Sprite(320,440);
        bg.image = game.assets['res/BG.png'];
        // 4 - Add child nodes        
        this.addChild(bg);        
        this.addChild(label);
    }
});
};