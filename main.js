import { makeMenu } from "./scenes/menu.js";

new p5((p) => {
    let font;
    const scenes = ["menu", "world", "battle"];
    let currentScene = "menu";
    function setScene(name) {
      if (scenes.includes(name)) {
        currentScene = name;
      }
    };
  
    const menu = makeMenu(p);

    p.preload = () => {
        font = p.loadFont("./assets/power-clear.ttf");
        menu.load();
    };
    
    p.setup = () => {
        const canvasEl = p.createCanvas(512, 384, document.getElementById("game"));
        // make canvas sharper temporarly
        p.pixelDensity(3);
        canvasEl.canvas.style = "";

        p.textFont(font);
    };

    p.draw = () => {
        switch (currentScene) {
          case "menu":
            menu.update();
            menu.draw();
            break;
          case "world":
            world.update();
            world.draw();
            break;
          case "battle":
            battle.update();
            battle.draw();
            break;
          default:
        }
    };

    p.keyPressed = (keyEvent) => {
        if (keyEvent.keyCode === p.ENTER && currentScene === "menu")
            setScene("world");
    };

    p.keyReleased = () => {

    };
})