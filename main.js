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
  const graphics = new PIXI.Graphics().fill(0xde3249).circle(0, 0, 50);
  // .close();
  // graphics.endFill();
  // endFill() is no longer needed (and shouldn't be used) in PixiJS v8.
  // Why? beginFill(...) and endFill() are replaced by a single .fill(...) call.
  // Why? Drawing and styling are now chainable, which makes code cleaner.

  // const texture = app.renderer.generateTexture(graphics);
  // const sprite = new PIXI.Sprite(texture);

  /*PIXI.Graphics objects aren't automatically rendered unless you add graphics directly to the stage. Generating a texture from them, like you're doing with generateTexture(), needs a slightly different approach.*/

  graphics.position.set(app.screen.width / 2, app.screen.height / 2);
  graphics.pivot.set(0, 0); // or set to (25, 25) if needed

  // API does not auto-calculate the local bounds (width/height) immediately when using chainable shape methods like .circle() — especially when you don’t set a lineStyle() or use .stroke() or .fill() correctly.
  //graphics.updateLocalBounds(); // I gave you a method that doesn't exist on the public Graphics API in PixiJS v8. Apologies for the confusion!

  app.stage.addChild(graphics);

  // Set the sprite position
  // sprite.anchor.set(0.5);
  // sprite.x = app.screen.width / 2;
  // sprite.y = app.screen.height / 2;
  // app.stage.addChild(sprite);

  // Animate the sprite
  app.ticker.add(() => {
    graphics.rotation += 0.01;
  });
}

init();
