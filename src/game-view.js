function GameView(game) {
  this.game = game;
}

GameView.prototype.render = function() {
  this.frameViews = this.game.getFrames().map((frame) => new FrameView(frame));

  var frameViewElements = this.frameViews.map((view) => view.render());
  this.element = $('<div class="game__container"></div>');
  this.element.append(frameViewElements);
  return this.element;
}
