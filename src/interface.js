function initialise() {

  var frame = new Frame();
  var frameView = new FrameView(frame);
  var frameElement = frameView.render();
  $('#scorecard-container').append(frameElement);

  var controlsView = new ControlsView(addScore);
  var controlsElement = controlsView.render();
  $('#controls-container').append(controlsElement);

  function addScore(value) {
    frame.roll(parseInt(value));
    frameView.update();
  }
}


$(document).ready(initialise);
