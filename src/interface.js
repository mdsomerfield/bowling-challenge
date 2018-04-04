function initialise() {

  var frame = new Frame();

  var frameView = new FrameView(frame);

  var frameElement = frameView.render();

  $('#scorecard-container').append(frameElement);
}

$(document).ready(initialise);
