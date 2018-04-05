(function(exports) {

  var Frame = exports.Frame;
  var frameViewBuilder = exports.frameViewBuilder;
  var Controls = exports.ControlsView;

  function initialise() {

    var game = new Game();
    var gameView = new GameView(game);
    var gameElement = gameView.render();
    $('#scorecard-container').append(gameElement);

    var controlsView = new ControlsView(addScore);
    var controlsElement = controlsView.render();
    $('#controls-container').append(controlsElement);

    function addScore(value) {
      frame.roll(parseInt(value));
      frameView.update();
    }
  }

  $(document).ready(initialise);

})(this);
