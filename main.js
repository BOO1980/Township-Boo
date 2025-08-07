import * as PIXI from 'pixi.js';

// Create the Pixi Application
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

// Load a sprite (a simple graphic to demonstrate)
const graphics = new PIXI.Graphics();
graphics.beginFill(0xde3249);
graphics.drawCircle(0, 0, 50);
graphics.endFill();

const texture = app.renderer.generateTexture(graphics);
const sprite = new PIXI.Sprite(texture);

// Set the sprite position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
app.stage.addChild(sprite);

// Animate the sprite
app.ticker.add(() => {
  sprite.rotation += 0.01;
});