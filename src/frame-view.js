function FrameView(frame) {
  this.frame = frame;
}

FrameView.prototype.render = function() {
  var content =
    `<div class='frame__container'>
      <div class='frame__score'>${this._getFrameScore()}</div>
    </div>`;
  return $(content);
}

FrameView.prototype._getFrameScore = function() {
  return this.frame.getScore();
}
