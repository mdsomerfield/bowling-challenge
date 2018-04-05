(function(exports) {

  function FrameView(frame) {
    this._frame = frame;
    this._element = null;
  }

  FrameView.prototype.render = function() {
    var content =
      `<div class='frame__container'>
        <div class='frame__rolls'>
          <div class='roll__score'>${this._getRollScore(0)}</div>
          <div class='roll__score'>${this._getRollScore(1)}</div>
        </div>
        <div class='frame__score'>${this._getFrameScore()}</div>
      </div>`;
    this._element = $(content);
    return this._element;
  }

  FrameView.prototype.update = function() {
    this._element.find('.frame__score').text(this._getFrameScore());
  }

  FrameView.prototype._getFrameScore = function() {
    return this._frame.getScore();
  }

  FrameView.prototype._getRollScore = function() {
    return this._frame.getRolls();
  }

  exports.frameViewBuilder = {
    build: (frame) => new FrameView(frame)
  }


})(this);
