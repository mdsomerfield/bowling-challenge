(function(exports) {

  var frameViewBuilder = exports.frameViewBuilder;

  function GameView(game) {
    this.game = game;
  }

  GameView.prototype.render = function() {
    this.frameViews = this.game.getFrames().map((frame) => frameViewBuilder(frame));

    var frameViewElements = this.frameViews.map((view) => view.render());
    this.element = $('<div class="game__container"></div>');
    this.element.append(frameViewElements);
    return this.element;
  }

  exports.GameView = GameView;

})(this);
