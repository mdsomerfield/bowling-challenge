(function(exports) {

  var gameBuilder = exports.gameBuilder;
  var Frame = exports.Frame;
  var frameViewBuilder = exports.frameViewBuilder;
  var Controls = exports.ControlsView;

  function initialise() {

    var game = gameBuilder.build10FrameGame();
    var gameView = new GameView(game);
    var gameElement = gameView.render();
    $('#scorecard-container').append(gameElement);

    var controlsView = new ControlsView(addScore);
    var controlsElement = controlsView.render();
    $('#controls-container').append(controlsElement);

    function addScore(value) {
      game.roll(parseInt(value));
      gameView.update();
    }
  }

  $(document).ready(initialise);

})(this);
