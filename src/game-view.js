(function(exports) {

  var frameViewBuilder = exports.frameViewBuilder;

  function GameView(game) {
    this.game = game;
  }

  GameView.prototype.render = function() {
    this.frameViews = this.game.getFrames().map((frame) => frameViewBuilder.build(frame));

    var frameViewElements = this.frameViews.map((view) => view.render());
    this.element = $(
      `<div class="game__container">
        <div class="frames__container"></div>
        <div class="game-score__container">${this.game.getScore()}</div>
      </div>`);
    this.element.find('.frames__container').append(frameViewElements);
    return this.element;
  }

  GameView.prototype.update = function() {
    this.frameViews.forEach((frameView) => frameView.update());
    this.element.find('.game-score__container').text(this.game.getScore());
  }

  exports.GameView = GameView;

})(this);
