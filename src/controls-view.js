(function(exports) {

  function ControlsView(scoreButtonCallback) {
    this.scoreButtonCallback = scoreButtonCallback;
  }

  ControlsView.prototype.render = function() {

    this.controlsElement = this._buildElement();
    this._bindControls();
    return this.controlsElement;
  }

  ControlsView.prototype._buildElement = function() {
    var controlsContent =
      `<div class='score-controls__container'>
        <input class='score__input' />
        <button class='score__button'>Confirm</button>
      </div>`;
    return $(controlsContent);
  }

  ControlsView.prototype._bindControls = function() {
    this.controlsElement.find('.score__button').click(() => {
      var inputValue = this.controlsElement.find('.score__input').val();
      this.scoreButtonCallback(inputValue);
    });
  }

  exports.ControlsView = ControlsView;

})(this);
