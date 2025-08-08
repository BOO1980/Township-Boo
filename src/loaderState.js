class LoaderState extends GameState {
  start() {
    const { app } = this;
    //Background
    this.bg = new PIXI.Graphics()
      .rect(0, 0, app.screen.width, app.screen.height)
      .fill(0x333333);
    app.stage.addChild(this.bg);
  }
}
