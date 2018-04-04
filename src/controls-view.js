function ControlsView() {

}

ControlsView.prototype.render = function() {
  var controlsContent =
    `<div class='score-controls__container'>
      <input class='score__input' />
      <button class='score__button'>Confirm</button>
    </div>`;
  var controlsElement = $(controlsContent);
  return controlsElement;
}
