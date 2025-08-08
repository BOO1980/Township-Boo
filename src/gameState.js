class GameState {
  constructor(app) {
    this.app = app;
  }
  // Called when the game state is initialized
  start() {}
  // Called when the game state is updated
  // delta is the time since the last update in milliseconds
  update(delta) {}
  // Called when the game state is rendered
  destroy() {}
}
