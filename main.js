import * as PIXI from "pixi.js";

// Create the Pixi Application
/* PixiJS v8 splits Application into two steps: new PIXI.Application() + await app.init(options).
 * Why? PixiJS v8 separated initialization into an async method to better support:
 * - Asynchronous context creation (e.g., WebGL fallback handling)
 * - Future-proofing rendering engines (like WebGPU)
 * - Cleaner error handling*/

async function init() {
  const app = new PIXI.Application();
  await app.init({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
  });

  document.body.appendChild(app.canvas);
  // Deprecated: Use app.canvas instead of app.view
  // Why? PixiJS v8 introduced this change to make the naming clearer and to avoid confusion, as .canvas more accurately reflects the type of element being referenced.

  // Load a sprite (a simple graphic to demonstrate)
  const graphics = new PIXI.Graphics();
  graphics.fill(0xde3249).circle(0, 0, 50);

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
}

init();
