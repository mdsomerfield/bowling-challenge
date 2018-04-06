(function(exports) {

  function ControlsView(scoreButtonCallback) {
    this._scoreButtonCallback = scoreButtonCallback;
    this.controlsElement = null;
  }

  ControlsView.prototype.render = function() {
    this._controlsElement = this._buildElement();
    this._bindControls();
    return this._controlsElement;
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
    this._controlsElement.find('.score__button').click(() => {
      var inputValue = this._controlsElement.find('.score__input').val();
      this._scoreButtonCallback(inputValue);
    });
  }

  exports.ControlsView = ControlsView;

})(this);
