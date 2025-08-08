/*(handles state switching*/
class Game {
  constructor(app) {
    this.app = app;
    this.currentState = null;
    app.ticker.add(this.update.bind(this));
  }

  changeState(StateClass) {
    if (this.currentState) {
      this.currentState.destroy();
    }
    this.currentState = new StateClass(this.app, this);
    this.currentState.start();
  }

  update(delta) {
    if (this.currentState) {
      this.currentState.update(delta);
    }
  }
}
