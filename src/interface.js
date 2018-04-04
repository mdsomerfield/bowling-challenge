function initialise() {

  var frame = new Frame();
  var frameView = new FrameView(frame);
  var frameElement = frameView.render();
  $('#scorecard-container').append(frameElement);

  var controlsView = new ControlsView();
  var controlsElement = controlsView.render();
  $('#controls-container').append(controlsElement);
}

$(document).ready(initialise);
